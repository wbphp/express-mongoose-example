
var mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/express-posts' );

var models = ['posts'];

exports.initialize = function() {
    var len = models.length;

    for (var i = 0; i < len; i++) {
      require('../app/models/' + models[i]);
    }
};
