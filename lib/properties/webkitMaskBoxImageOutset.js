'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-mask-box-image-outset', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-box-image-outset');
    },
    enumerable: true,
    configurable: true
};
