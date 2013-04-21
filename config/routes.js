
module.exports = function (app){
  
  var posts = require('../app/controllers/posts');

  app.get('/posts/', posts.all);
  app.get('/posts/:id/', posts.detail);
}
