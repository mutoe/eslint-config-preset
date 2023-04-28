import { Linter, Rule } from 'eslint'

let ruleMap: Map<string, Rule.RuleModule> | null = null

/**
 * Get the core rule implementation from the rule name
 */
export function getCoreRule (name: string): Rule.RuleModule {
  let map: Map<string, Rule.RuleModule>
  if (ruleMap) {
    map = ruleMap
  } else {
    ruleMap = map = new Linter().getRules()
  }
  const result = map.get(name)
  if (!result) throw new Error(`rule ${name} not exist`)
  return result
}
