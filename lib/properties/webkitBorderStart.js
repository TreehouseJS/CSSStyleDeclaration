'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-border-start', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-start');
    },
    enumerable: true,
    configurable: true
};
