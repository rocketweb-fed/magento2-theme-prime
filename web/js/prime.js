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
