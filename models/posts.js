/**
 * Created by Tyler on 3/30/2016.
 */
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}],
    dateCreated: {type:Date, default: Date.now()}
});

mongoose.model('Post', PostSchema);