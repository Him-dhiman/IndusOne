const mongoose = require('mongoose');

const subSchema= new mongoose.Schema({
    usercode:{
        type: String,
        required: true
    },
    rstatus:{
        type: String,
        required:true
    }
})

const Submission = mongoose.model('SUBMISSION', subSchema);

module.exports = Submission;