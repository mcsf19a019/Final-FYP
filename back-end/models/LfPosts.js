const mongoose = require('mongoose');

const LfPostsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required : true
    },
 
    status:{
        type: Boolean,
        default: false
    },
    date:{
        type: Date,
        required : true
    }
})

const LfPosts = mongoose.model('LfPostData',LfPostsSchema);
module.exports = LfPosts;