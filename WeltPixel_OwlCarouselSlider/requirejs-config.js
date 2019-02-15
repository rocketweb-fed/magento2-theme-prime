var config = {
    map: {
        '*': {
            rwSlider: 'WeltPixel_OwlCarouselSlider/js/rw-slider',
            slick: 'WeltPixel_OwlCarouselSlider/js/slick.min'
        }
    },
    shim: {
        productSlider: {
            deps: ['slick']
        }
    }
};
