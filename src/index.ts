import ruleMap from './rules/index';

export default {
    RuleSource: ruleMap,
    Plugin: {
        extend: 'some-plugin-name',     // the plugin you extend here should be trying to achieve the same behaviour. In fact, its plugin value must be of the same shape as your plugin value.
        compute: ['rule-2', 'rule-3', 'my-custom-rule'],
        configure: {
            'rule-2': 'value',
            'my-custom-rule': { property: 'value' }
        },
        override: {                     // override rules used in ancestor plugins
            'rule-1': 'new-rule-1',
            'rule-0': {
                rule: 'new-rule-0',
                config: { property: 3 }
            }
        }
        
    }
}
