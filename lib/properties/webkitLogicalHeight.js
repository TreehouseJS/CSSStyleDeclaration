'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-logical-height', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-logical-height');
    },
    enumerable: true,
    configurable: true
};
