
var mongoose = require('mongoose')
 , Post = mongoose.model('Post')

exports.all = function(req, res){

  Post.find().lean().exec(function (err, posts) {
    res.render('posts/all', { posts: posts });
  });
};

exports.detail = function (req, res){

  var id = res.params.id;

  var post = Post.detail(id);
  
  res.render('posts/detail', { post : post });
};
