
var mongoose = require('mongoose')
 , Post = mongoose.model('Post')

exports.all = function(req, res){

  // (Post.add)('test', 'test');

  new Post({title: 'title', content: 'content'}).save();

  var posts = Post.find();

  res.render('posts/all', { posts: posts });
};

exports.detail = function (req, res){

  var id = res.params.id;

  var post = Post.detail(id);
  
  res.render('posts/detail', { post : post });
};
