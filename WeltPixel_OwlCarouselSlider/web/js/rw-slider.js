define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    $.widget('rw.slider', {
        options: {
            total: 0,
            type: 'widget-product-slider',
            sliderConfig: {},
            breakpoints: {}
        },

        _create: function () {
            var self = this,
                options = self.options;

            self._initializeSlider(options);
        },

        _initializeSlider: function (options) {
            var self = this,
                slider = self.element,
                slConf = options.sliderConfig,
                items = slConf.items >= 0 && slConf.items !== null ? slConf.items : 2,
                total = options.total,
                stagePadding = slConf.stagePadding !== '' ? parseInt(slConf.stagePadding, 10) : 0,
                animate_Out = slConf.transition === 'fadeOut' ? true : false;

            if (options.type === 'widget-product-slider') {
                slider.slick({
                    autoplay: parseInt(slConf.autoplay, 10) === 1 ? true : false,
                    autoplaySpeed: parseInt(slConf.autoplayTimeout, 10) > 0 && 
                        slConf.autoplayTimeout !== null ? parseInt(slConf.autoplayTimeout, 10) : 3000,
                    adaptiveHeight: parseInt(slConf.autoHeight, 10) === 1 ? true : false,
                    arrows: parseInt(slConf.nav, 10) === 1 ? true : false,
                    dots: parseInt(slConf.dots, 10) === 1 && parseInt(items, 10) < total ? true : false,
                    lazyLoad: parseInt(slConf.lazyLoad, 10) === 1 ? "ondemand" : "progressive",
                    infinite: parseInt(slConf.loop, 10) === 1 ? true : false,
                    centerPadding: parseInt(slConf.center, 10) === 1 ? 0 : stagePadding,
                    slidesToShow: parseInt(items, 10),
                    slidesToScroll: parseInt(items, 10),
                    fade: animate_Out,
                    responsive: [
                        {
                            breakpoint: self.options.breakpoints.breakpoint_1,
                            settings: {
                                slidesToShow: slConf.items_brk1 >= 0 && 
                                    slConf.items_brk1 != null ? parseInt(slConf.items_brk1, 10) : parseInt(items, 10),
                                slidesToScroll: slConf.items_brk1 >= 0 && 
                                    slConf.items_brk1 != null ? parseInt(slConf.items_brk1, 10) : parseInt(items, 10),
                                arrows: parseInt(slConf.nav_brk1, 10) === 1 ? true : false,
                                dots: slConf.items_brk1 != null && slConf.items_brk1 < total ? true : false,
                                fade: false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_2,
                            settings: {
                                slidesToShow: slConf.items_brk2 >= 0 && 
                                    slConf.items_brk2 != null ? parseInt(slConf.items_brk2, 10) : parseInt(items, 10),
                                slidesToScroll: slConf.items_brk2 >= 0 && 
                                    slConf.items_brk2 != null ? parseInt(slConf.items_brk2, 10) : parseInt(items, 10),
                                arrows: parseInt(slConf.nav_brk2, 10) === 1 ? true : false,
                                dots: slConf.items_brk2 != null && slConf.items_brk2 < total ? true : false,
                                fade: false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_3,
                            settings: {
                                slidesToShow: slConf.items_brk3 >= 0 && 
                                    slConf.items_brk3 != null ? parseInt(slConf.items_brk3, 10) : parseInt(items, 10),
                                slidesToScroll: slConf.items_brk3 >= 0 && 
                                    slConf.items_brk3 != null ? parseInt(slConf.items_brk3, 10) : parseInt(items, 10),
                                arrows: parseInt(slConf.nav_brk3, 10) === 1 ? true : false,
                                dots: slConf.items_brk3 != null && slConf.items_brk3 < total ? true : false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_4,
                            settings: {
                                slidesToShow: slConf.items_brk4 >= 0 && 
                                    slConf.items_brk4 != null ? parseInt(slConf.items_brk4, 10) : parseInt(items, 10),
                                slidesToScroll: slConf.items_brk4 >= 0 && 
                                    slConf.items_brk4 != null ? parseInt(slConf.items_brk4, 10) : parseInt(items, 10),
                                arrows: parseInt(slConf.nav_brk4, 10) === 1 ? true : false,
                                dots: slConf.items_brk4 != null && slConf.items_brk4 < total ? true : false
                            }
                        }]
                }, self._showSlider());
            } else {
                $(slider).slick({
                    autoplay: parseInt(slConf.autoplay, 10) === 1 ? true : false,
                    autoplaySpeed: parseInt(slConf.autoplayTimeout, 10) > 0 && 
                        slConf.autoplayTimeout !== null ? parseInt(slConf.autoplayTimeout, 10) : 3000,
                    adaptiveHeight: parseInt(slConf.autoHeight, 10) === 1 ? true : false,
                    arrows: parseInt(slConf.nav, 10) === 1 ? true : false,
                    dots: parseInt(slConf.dots, 10) === 1 ? true : false,
                    lazyLoad: parseInt(slConf.lazyLoad, 10) === 1 ? "ondemand" : "progressive",
                    infinite: parseInt(slConf.loop, 10) === 1 ? true : false,
                    centerPadding: parseInt(slConf.center, 10) === 1 ? 0 : stagePadding,
                    fade: animate_Out,
                    responsive: [
                        {
                            breakpoint: self.options.breakpoints.breakpoint_1,
                            settings: {
                                arrows: parseInt(slConf.nav_brk1, 10) === 1 ? true : false,
                                fade: false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_2,
                            settings: {
                                arrows: parseInt(slConf.nav_brk2, 10) === 1 ? true : false,
                                fade: false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_3,
                            settings: {
                                arrows: parseInt(slConf.nav_brk3, 10) === 1 ? true : false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_4,
                            settings: {
                                arrows: parseInt(slConf.nav_brk4, 10) === 1 ? true : false
                            }
                        }]
                });
            }
        },

        _showSlider: function () {
            var slider = this.element;

            slider.removeClass('slider-hide');
        }
    });

    return $.rw.slider;
});