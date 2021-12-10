const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const microorganismSubTypesSchema = new Schema({
    id: Number,
    name: String,
});

const MicroorganismSubTypesModel = mongoose.model('MicroorganismSubTypes', microorganismSubTypesSchema)
module.exports = MicroorganismSubTypesModel