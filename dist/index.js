var ruleMap = {
    "my-custom-rule": () => import('./my-custom-rule-8a847445.js'),
    "new-rule-a": () => import('./new-rule-a-d541f07a.js'),
    "new-rule-b": () => import('./new-rule-b-c78509d3.js'),
};

var index = {
    RuleSource: ruleMap,
    Plugin: {
        description: "description of my plugin",
        extend: 'some-similar-plugin',
        compute: ['rule-c', 'rule-d', 'my-custom-rule'],
        configure: {
            'rule-c': 'value',
            'my-custom-rule': { property: 'value' }
        },
        override: {
            'rule-a': 'new-rule-a',
            'rule-b': {
                rule: 'new-rule-b',
                config: { property: 3 }
            }
        }
    }
};

export { index as default };
