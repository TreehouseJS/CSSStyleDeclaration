'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('background-repeat-x', v);
    },
    get: function () {
        return this.getPropertyValue('background-repeat-x');
    },
    enumerable: true,
    configurable: true
};
