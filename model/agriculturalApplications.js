const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const agriculturalApplicationsSchema = new Schema({
    id: Number,
    category: String,
});

const AgriculturalApplicationsModel = mongoose.model('AgriculturalApplications', agriculturalApplicationsSchema)
module.exports = AgriculturalApplicationsModel