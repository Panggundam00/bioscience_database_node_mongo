const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const microorganismTypesSchema = new Schema({
    id: Number,
    name: String,
});

const MicroorganismTypesModel = mongoose.model('MicroorganismTypes', microorganismTypesSchema)
module.exports = MicroorganismTypesModel