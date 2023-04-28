import path from 'node:path'
import type { AST as V } from 'vue-eslint-parser'
import { Rule } from 'eslint'
import * as jsoncESLintParser from 'jsonc-eslint-parser'
import { PartialRuleModule, RuleModule } from '../types'

/**
 * Define the rule.
 * @param ruleName ruleName
 * @param rule rule module
 */
export function createRule (
  ruleName: string,
  rule: PartialRuleModule,
): RuleModule {
  return {
    meta: {
      ...rule.meta,
      docs: {
        ...rule.meta.docs,
        // TODO add rule url
        url: '',
        // url: `https://ota-meshi.github.io/eslint-plugin-jsonc/rules/${ruleName}.html`,
        ruleId: `configurable/${ruleName}`,
        ruleName,
      },
    },
    jsoncDefineRule: rule,
    create (context: Rule.RuleContext): any {
      if (
        typeof context.parserServices.defineCustomBlocksVisitor
                === 'function'
                && path.extname(context.getFilename()) === '.vue'
      ) {
        return context.parserServices.defineCustomBlocksVisitor(
          context,
          jsoncESLintParser,
          {
            target (lang: string | null, block: V.VElement) {
              if (lang) {
                return /^json[5c]?$/i.test(lang)
              }
              return block.name === 'i18n'
            },
            create (blockContext: Rule.RuleContext) {
              return rule.create(blockContext, {
                customBlock: true,
              })
            },
          },
        )
      }
      return rule.create(context, {
        customBlock: false,
      })
    },
  }
}
