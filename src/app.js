// annoying little hack we have to do to get jquery and backbone to 
// play nice with browserify
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

// real requires
var gainModule = require("./controls/gain/module.js");

var context = new AudioContext, oscillator, gainNode;

oscillator = context.createOscillator();
oscillator.frequency.value = 200;

gainModule(context, oscillator, context.destination);
oscillator.start(0);
