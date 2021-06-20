const mongoose = require('mongoose');

const TsPostsSchema = new mongoose.Schema({
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

const TsPosts = mongoose.model('TsPostData',TsPostsSchema);
module.exports = TsPosts;