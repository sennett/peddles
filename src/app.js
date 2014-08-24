// annoying little hack we have to do to get jquery and backbone to 
// play nice with browserify
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

// real requires
var gainModule = require("./controls/gain/module.js");
var bypassModule = require("./controls/bypass/module.js");

var context = new AudioContext, oscillator, gainNode, bypassControl, gainControl;

oscillator = context.createOscillator();
oscillator.frequency.value = 200;
gainNode = context.createGain();
oscillator.connect(gainNode);

bypassControl = bypassModule(oscillator, gainNode, context.destination);
gainControl = gainModule(gainNode, context.destination);

oscillator.start(0);
