/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'matchMedia',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    /**
     * Responsive behavior
     */
    mediaCheck({
        media: '(min-width: 769px)',

        /*** Switch to Desktop Version. ***/
        entry: function () {
            $("#narrow-by-list > dt").collapsible({ active: true, content: '.filter-options-content' });
        },
        /*** Switch to Mobile Version. ***/
        exit: function () {
            $("#narrow-by-title .filter-title").collapsible({ active: false, content: '.filter-content' });
            $("#narrow-by-list > dt").collapsible({ active: false, content: '.filter-options-content' });
        }
    });

    /**
     * Global behavior
     */
    $(document).ready(function () {

        /* More/Less toggle in default layered nav */
        $('.block.filter dd').each(function () {
            var list = $(this),
                items = list.find('li.item');

            if (list.find('.show_more_count').val()) {
                var sizeOfToggle = list.find('.show_more_count').val();
            } else {
                var sizeOfToggle = 6;
            }

            if (items.length > sizeOfToggle) {
                list.addClass('more-available');
                list.find('li.item').slice(sizeOfToggle).addClass('extra hidden');
                    
                list.find('li.more-toggle a').click(function () {
                    $(this).toggleClass('toggled', '');
                    list.find('li.extra').toggleClass('hidden');
                    
                    return false;
                });
            }
        });
    });
});
