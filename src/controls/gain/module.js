var View = require('./view.js');
var Model = require('./model.js');

module.exports = function(audioContext, sourceNode, destinationNode){
    var gain = audioContext.createGain();
    sourceNode.connect(gain);
    gain.connect(destinationNode);
    gain.gain.value = 0;
    new View({model: new Model({gainControl: gain})});
};