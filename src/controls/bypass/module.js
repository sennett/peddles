var View = require('./view.js');
var Model = require('./model.js');

module.exports = function(sourceNode, destinationNode, bypassedDestinationNode){
    return new View({model: new Model({
        sourceNode: sourceNode, 
        destinationNode: destinationNode,
        bypassedDestinationNode: bypassedDestinationNode
    })});
};