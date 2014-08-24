var Backbone = require('backbone');
var _ = require("underscore");
var template = require("./template.html");

module.exports = Backbone.View.extend({
	el: "#bypassTarget",
	
	events: {
		"click .bypass": "handleBypass"
	},
	
	handleBypass: function(e){
		this.model.set('bypassed', e.target.checked);
	},
	
	initialize: function(){
		_.bindAll(this, 'render', 'handleBypass');
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},
	
	render: function(){
		this.$el.html(template(this.model.attributes));
	}
});