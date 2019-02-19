define([
    'jquery',
    'matchMedia',
    'mage/collapsible'
], function ($, mediaCheck) {
    'use strict';

    $.widget('rw.collapsibleFilters', {
        options: {
            filterCollapse: true,
            showMore: true,
            showMoreCount: 6
        },

        _create: function () {
            if (this.options.filterCollapse) {
                this._filterCollapse();
            }

            if (this.options.showMore) {
                this._showMore();
            }
        },
        
        /**
         * Enables toggleable filters in layered navigation
         */
        _filterCollapse: function() {
            mediaCheck({
                media: '(min-width: 769px)',
                
                /* Switch to desktop */
                entry: function () {
                    $("#narrow-by-list > dt").collapsible({ active: true, content: '.filter-options-content' });
                    
                },
                
                /* Switch to mobile */
                exit: function () {
                    $("#narrow-by-title .filter-title").collapsible({ active: false, content: '.filter-content' });
                    $("#narrow-by-list > dt").collapsible({ active: false, content: '.filter-options-content' });
                }
            });
        },

        /**
         * Enables more/less button in option lists
         */
        _showMore: function() {
            const options = this.options;

            $('.block.filter dd').each(function () {
                const list = $(this);
                const items = list.find('li.item');
                const sizeOfToggle = options.showMoreCount;
        
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
        },
    });

    return $.rw.collapsibleFilters;  
});
