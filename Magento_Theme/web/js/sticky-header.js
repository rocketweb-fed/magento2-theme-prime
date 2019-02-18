define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('rw.stickyHeader', {
        options: {
            enableOnMobile: true,
            stickyClass: 'sticky-header',
            wrapper: '.page-wrapper'
        },

        _create: function () {
            if (!this.options.disabled) {
                this._initializeSticky();
            }
        },

        _initializeSticky: function() {
            const self = this;
            const header = this.element;
            const wrapper = $(this.options.wrapper);
            
            let stickyDummyHeight = header.height();
            let scrollPosition;

            if (window.innerWidth > (this.options.enableOnMobile ? 0 : 768)) {
                $(window).scroll(function () {
                    scrollPosition = $(window).scrollTop();

                    if (scrollPosition > stickyDummyHeight) {
                        self._enableSticky(wrapper, stickyDummyHeight);
                    } else {
                        self._disableSticky(wrapper);
                    }
                });
            }
        },

        _enableSticky: function(el, height) {
            if (!el.hasClass(this.options.stickyClass)) {
                el.addClass(this.options.stickyClass);
                $('body').css({ "padding-top": height + 'px' });
            }
        },

        _disableSticky: function(el) {
            if (el.hasClass(this.options.stickyClass)) {
                el.removeClass(this.options.stickyClass);
                $('body').css({ "padding-top": "0" });
            }
        }
    });

    return $.rw.stickyHeader;    
});
