const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    solno: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

var subs = mongoose.model('Code', subSchema);

module.exports = subs;