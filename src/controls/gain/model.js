var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
	defaults: {
		gain: 0,
		step: 0.1,
		bypassed: false
	},
	initialize: function(){
		_.bindAll(this, 'updateAll', 'updateGain', 'updateBypass');
		this.on('change:gain', this.updateGain);
		this.on('change:step', this.updateGain);
		this.on('change:bypassed', this.updateBypass);
		this.updateAll();
	},
	updateAll: function(){
		this.updateGain();
		this.updateBypass();
	},
	updateGain: function(){
		this.attributes.gainNode.gain.value = this.attributes.gain;
	},
	updateBypass: function(){
		if(this.attributes.bypassed){
			this.attributes.sourceNode.disconnect(this.attributes.gainNode);
			this.attributes.gainNode.disconnect(this.attributes.destinationNode);
			// connect source directly to dest
			this.attributes.sourceNode.connect(this.attributes.destinationNode);
		}
		else{
			this.attributes.sourceNode.disconnect(this.attributes.destinationNode);
			// connect source to gain, then gain to dest
			this.attributes.sourceNode.connect(this.attributes.gainNode);
			this.attributes.gainNode.connect(this.attributes.destinationNode);
		}
			
	}
});