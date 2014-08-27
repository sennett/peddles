var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
	defaults: {
		bypassed: false
	},
	initialize: function(){
		_.bindAll(this, 'updateBypass');
		this.on('change:bypassed', this.updateBypass);
		this.updateBypass();
	},

	updateBypass: function(){
		if (this.attributes.bypassed) {
			this.attributes.sourceNode.disconnect(this.attributes.destinationNode);
			this.attributes.sourceNode.connect(this.attributes.bypassedDestinationNode);
		} else {
			this.attributes.sourceNode.disconnect(this.attributes.bypassedDestinationNode);
			this.attributes.sourceNode.connect(this.attributes.destinationNode);
		}
	}
});