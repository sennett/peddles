// annoying little hack we have to do to get jquery and backbone to 
// play nice with browserify
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

// real requires
var gainModule = require("./controls/gain/module.js");

var context = new AudioContext, oscillator, gainNode;

gainNode = gainModule(context);

gainNode.connect(context.destination);

var running = false;
var toggle = function(){
	if (running)    
		oscillator.stop();
	else {
		oscillator = context.createOscillator();
		oscillator.frequency.value = 200;
		
		oscillator.connect(gainNode);
		oscillator.start(0);
	}
	running = !running;
};

$("#toggleSound").click(toggle);