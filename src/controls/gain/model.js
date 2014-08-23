var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
	defaults: {
		gain: 0
	},
	initialize: function(){
		_.bindAll(this, 'update');
		this.on('change', this.update);
	},
	update: function(){
		gain.gain.value = this.attributes.gain;
	}
});