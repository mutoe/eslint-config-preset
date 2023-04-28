import type { RuleListener, RuleModule } from '../types'
import { createRule, getAutoConfig } from '../utils'

export default createRule('auto', {
  meta: {
    docs: {
      description: 'apply configurable rules similar to your configured ESLint core rules',
      recommended: null,
      extensionRule: false,
      layout: false,
    },
    fixable: 'code',
    schema: [],
    messages: {},
    type: 'suggestion',
  },
  create (context, params) {
    if (!context.parserServices.isJSON) return {}

    const autoConfig = getAutoConfig(context.getFilename())

    const visitor: RuleListener = {}
    for (const ruleId of Object.keys(autoConfig)) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires -- special rule
      const rule: RuleModule = require(`./${ruleId.replace(/^configurable\//u, '')}`).default
      const subContext: any = {
        __proto__: context,
        options: getRuleOptions(autoConfig[ruleId]),
        report (options: any) {
          if (options.messageId) {
            options.message = `[${ruleId}] ${
              rule.meta.messages[options.messageId]
            }`
            delete options.messageId
          } else {
            options.message = `[${ruleId}] ${options.message}`
          }
          context.report(options)
        },
      }
      const ruleVisitor = rule.jsoncDefineRule.create(subContext, params)
      for (const key of Object.keys(ruleVisitor)) {
        const newVisit = ruleVisitor[key]
        const oldVisit = visitor[key]
        if (!newVisit) continue

        if (oldVisit) {
          visitor[key] = (...args: [never]) => {
            oldVisit(...args)
            newVisit(...args)
          }
        } else {
          visitor[key] = ruleVisitor[key]
        }
      }
    }
    return visitor
  },
})

/**
 * Build the options to create the rule.
 */
function getRuleOptions (options: number | string | any[]): any[] {
  if (!Array.isArray(options)) return []

  return options.slice(1)
}
