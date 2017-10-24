import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(elems, offset) {
        this.itemsToReveal = elems;
        this.offsetPercentage = offset;
        this.hideInitialy();
        this.createWypoints();        
    }

    hideInitialy() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;