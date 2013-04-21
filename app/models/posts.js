
var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;
 
var Posts = new Schema({
    title : String,
    content : String
});
 
mongoose.model( 'Posts', Posts );
 
