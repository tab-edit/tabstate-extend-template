'use strict';

var ruleMap = {
    "my-custom-rule": () => require("./my-custom-rule"),
    "new-rule-a": () => require("./new-rule-a"),
    "new-rule-b": () => require("./new-rule-b"),
};

var index = {
    ruleSource: ruleMap,
    plugin: {
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

module.exports = index;
