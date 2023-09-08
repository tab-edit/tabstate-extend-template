'use strict';

var ruleMap = {
    "my-custom-rule": () => Promise.resolve().then(function () { return require('./my-custom-rule-5ae7c1c9.js'); }),
    "new-rule-a": () => Promise.resolve().then(function () { return require('./new-rule-a-01b9bc1c.js'); }),
    "new-rule-b": () => Promise.resolve().then(function () { return require('./new-rule-b-971547f6.js'); }),
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

module.exports = index;
