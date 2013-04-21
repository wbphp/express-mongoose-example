
exports.all = function(req, res){

  var custom = { name : 'custom test' };

  res.render('posts/all', { 
    custom: custom,
    title: 'so hard coded'
  });
};

exports.detail = function (req, res){

  var id = req.params.id;
  
  res.render('posts/detail', { id : id });
};
