'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('background-origin', v);
    },
    get: function () {
        return this.getPropertyValue('background-origin');
    },
    enumerable: true,
    configurable: true
};
