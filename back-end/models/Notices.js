const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        required : true
    }
})

const Notice = mongoose.model('NoticeData',NoticeSchema);
module.exports = Notice;