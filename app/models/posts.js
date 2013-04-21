
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
 
var PostSchema = new Schema({
  title : String,
  content : String
});

PostSchema.methods = {
  all : function() {
    var self = this;

    return self.find(function(err, posts) {
      return posts;
    });
  },
 
  detail : function(id) {
    var self = this;

    return self.findOne({_id: id}, function(error, post) {
      return post;
    });
  },

  add : function(title, content) {
    var self = this;

    return self.save({title: title, content: content});
  }
};

mongoose.model( 'Post', PostSchema );
