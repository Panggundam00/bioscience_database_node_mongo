const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const industrialApplicationsSchema = new Schema({
    id: Number,
    category: String,
});

const IndustrialApplicationsModel = mongoose.model('IndustrialApplications', industrialApplicationsSchema)
module.exports = IndustrialApplicationsModel