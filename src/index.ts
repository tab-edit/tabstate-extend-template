import ruleMap from './rules/index';
export default {
    ruleSource: ruleMap,
    plugin: {
        description: "description of my plugin",
        extend: 'some-similar-plugin',     // the plugin you extend here should be trying to achieve the same behaviour. In fact, its plugin value must be of the same shape as your plugin value.
        compute: ['rule-c', 'rule-d', 'my-custom-rule'],
        configure: {
            'rule-c': 'value',
            'my-custom-rule': { property: 'value' }
        },
        override: {                     // override rules used in ancestor plugins
            'rule-a': 'new-rule-a',
            'rule-b': {
                rule: 'new-rule-b',
                config: { property: 3 }
            }
        }
        
    }
}