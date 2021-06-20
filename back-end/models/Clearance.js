const mongoose = require('mongoose');

const ClearanceSchema = new mongoose.Schema({
    form:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required : true
    },
    name:{
        type: String,
        required : true
    },
    dc:{
        type: Boolean,
        required: true
    },
    seretaryDC:{
        type: Boolean,
        required: true
    },
    assistanceTreasure:{
        type: Boolean,
        required: true
    },
    library:{
        type: Boolean,
        required: true
    },
    networkAdmin:{
        type: Boolean,
        required: true
    },
    examCoordinator:{
        type: Boolean,
        required: true
    },
    programCoordinator:{
        type: Boolean,
        required: true
    },
    mainLibrary:{
        type: Boolean,
        required: true
    },
    hostelSuperintendent:{
        type: Boolean,
        required: true
    },
    studentAffairsCoordinator:{
        type: Boolean,
        required: true
    },
    date:{
        type: Date,
        required : true
    }
})

const Clearance = mongoose.model('ClearanceData',ClearanceSchema);
module.exports = Clearance;