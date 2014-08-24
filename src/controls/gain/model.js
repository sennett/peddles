var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
	defaults: {
		gain: 1,
		step: 0.1
	},
	initialize: function(){
		_.bindAll(this, 'update');
		this.on('change', this.update);
		this.update();
	},
	update: function(){
		this.attributes.gainControl.gain.value = this.attributes.gain;
	}
});