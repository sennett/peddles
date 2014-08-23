// annoying little hack we have to do to get jquery and backbone to 
// play nice with browserify
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var GainView = require('./controls/gain/view.js');
var GainModel = require('./controls/gain/model.js');

var context = new AudioContext, oscillator, gain;

gain = context.createGain();
gain.gain.value = 0;
gain.connect(context.destination);

var running = false;
var toggle = function(){
	if (running)    
		oscillator.stop();
	else {
		oscillator = context.createOscillator();
		oscillator.frequency.value = 200;
		
		oscillator.connect(gain);
		oscillator.start(0);
	}
	running = !running;
};

$("#toggleSound").click(toggle);

new GainView({model: new GainModel({gainControl: gain})});