
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
 
var PostSchema = new Schema({
  title : String,
  content : String
});

// PostSchema.statics.all = function() {
//     var self = this;
//     var posts;
//     self.find().lean().exec(function(err, posts) {
//       posts = posts;
//     });
//     return posts;
//   };

PostSchema.statics = {
  list : function() {
    var self = this;

    self.find().lean();
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
