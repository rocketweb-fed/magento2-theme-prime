define([
    'jquery',
    'matchMedia',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    // sticky header class toggle
    // __________________________

    var stickyDummyHeight = $("header.page-header").height(),
        wrapper = $('.page-wrapper'),
        scrollPosition;

    $(window).scroll(function () {
        if (window.innerWidth > 768) {
            scrollPosition = $(window).scrollTop();

            if (scrollPosition > stickyDummyHeight) {
                enableSticky(wrapper, stickyDummyHeight);
            } else {
                disableSticky(wrapper);
            }
        }
    });

    mediaCheck({
        media: '(min-width: 769px)',
        entry: function () {
            stickyDummyHeight = $("header.page-header").height();
            scrollPosition = $(window).scrollTop();

            if (scrollPosition > 550) {
                enableSticky(wrapper, stickyDummyHeight);
            }
        },
        exit: function () {
            disableSticky(wrapper);
        }
    });

    function enableSticky(el, height) {
        el.addClass('sticky-header');
        $('body').css({ "padding-top": height + 'px' });
    }

    function disableSticky(el) {
        el.removeClass('sticky-header');
        $('body').css({ "padding-top": "0" });
    }
});
