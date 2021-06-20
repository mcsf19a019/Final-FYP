const mongoose = require('mongoose');

const RejectionSchema = new mongoose.Schema({
    studntemail:{
        type: String,
        required : true
    },
    name:{
        type: String,
        required : true
    }
    
})

const Rejection = mongoose.model('RejectionData',RejectionSchema);
module.exports = Rejection;