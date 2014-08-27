var View = require('./view.js');
var Model = require('./model.js');

module.exports = function(gainNode, destination, $domNode){
    gainNode.connect(destination);
    return new View({model: new Model({
        gainNode: gainNode
    }), el: $domNode});
};