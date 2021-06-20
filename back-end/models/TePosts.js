const mongoose = require('mongoose');

const TePostsSchema = new mongoose.Schema({
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

const TePosts = mongoose.model('TePostData',TePostsSchema);
module.exports = TePosts;