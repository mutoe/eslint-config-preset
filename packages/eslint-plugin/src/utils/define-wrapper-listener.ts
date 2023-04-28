import { Rule } from 'eslint'
import { AST } from 'jsonc-eslint-parser'
import { RuleListener } from '../types'

/**
 *  Check whether a given value is a node.
 */
function isNode (data: any): boolean {
  return data
      && typeof data.type === 'string'
      && Array.isArray(data.range)
      && data.range.length === 2
      && typeof data.range[0] === 'number'
      && typeof data.range[1] === 'number'
}

/**
 * Get the proxy node
 */
function getProxyNode (node: AST.JSONNode): any {
  const type = node.type.startsWith('JSON') ? node.type.slice(4) : node.type
  const cache: any = { type }
  return new Proxy(node, {
    get (_t, key) {
      if (key in cache) {
        return cache[key]
      }
      const data = (node as any)[key]
      if (isNode(data)) {
        return (cache[key] = getProxyNode(data))
      }
      if (Array.isArray(data)) {
        return (cache[key] = data.map((e) => isNode(e) ? getProxyNode(e) : e))
      }
      return data
    },
  })
}

/**
 * Define the wrapped core rule.
 */
export function defineWrapperListener (
  coreRule: Rule.RuleModule,
  context: Rule.RuleContext,
  options: any[],
): RuleListener {
  if (!context.parserServices.isJSON) return {}

  const listener = coreRule.create({
    // @ts-expect-error
    __proto__: context,
    options,
  }) as RuleListener

  const jsonListener: RuleListener = {}
  for (const key of Object.keys(listener)) {
    const original = listener[key]
    if (!original) continue

    const jsonKey = key.replace(
      /(?:^|\b)(ExpressionStatement|(?:Template)?Literal|(?:Array|Object|Unary)Expression|Property|Identifier|TemplateElement)(?:\b|$)/gu,
      'JSON$1',
    )
    jsonListener[jsonKey] = function (node: AST.JSONNode, ...args) {
      original.call(this, getProxyNode(node) as never, ...args)
    }
  }

  return jsonListener
}
