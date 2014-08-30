var Backbone = require('backbone');
var _ = require("underscore");
var template = require("./template.html");
require('./styles.less');

module.exports = Backbone.View.extend({
	events: {
		"click .up": "increase",
		"click .down": "decrease"
	},
	
	increase: function(){
		this.model.set('gain', this.model.attributes.gain + this.model.attributes.step);
	},
	
	decrease: function(){
		this.model.set('gain', this.model.attributes.gain - this.model.attributes.step);
	},
	
	initialize: function(){
		_.bindAll(this, 'render', 'increase', 'decrease');
		this.listenTo(this.model, 'change', this.render);
	},
	
	render: function(){
		this.$el.html(template(this.model.attributes));
	}
});