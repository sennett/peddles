var Backbone = require("backbone");

module.exports = Backbone.View.extend({
    // http://ianstormtaylor.com/rendering-views-in-backbonejs-isnt-always-simple/
    renderSubView: function(view, selector){
        view.setElement(this.$(selector)).render();
    }
});