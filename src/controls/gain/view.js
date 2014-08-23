var Backbone = require('backbone');
var _ = require("underscore");

module.exports = Backbone.View.extend({
	el: "#gainControlTarget",
	
	template: _.template($('#gainControl').html()),
	
	events: {
		"click button.up": "increase",
		"click button.down": "decrease"
	},
	
	increase: function(){
		this.model.set('gain', this.model.attributes.gain + 1);
	},
	
	decrease: function(){
		this.model.set('gain', this.model.attributes.gain - 1);
	},
	
	initialize: function(){
		_.bindAll(this, 'render');
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template(this.model.attributes));
	}
});