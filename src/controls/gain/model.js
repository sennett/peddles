var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
	defaults: {
		gain: 0,
		step: 0.1
	},
	initialize: function(){
		_.bindAll(this, 'updateGain');
		this.on('change:gain', this.updateGain);
		this.on('change:step', this.updateGain);
		this.updateGain();
	},
	updateGain: function(){
		this.attributes.gainNode.gain.value = this.attributes.gain;
	}
});