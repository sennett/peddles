var View = require('./view.js');
var Model = require('./model.js');

module.exports = function(audioContext){
    var gain = audioContext.createGain();
    gain.gain.value = 0;
    new View({model: new Model({gainControl: gain})});
    return gain;
};