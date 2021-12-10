const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const subDistrictSchema = new Schema({
    id: Number,
    name: String,
});

const SubDistrictModel = mongoose.model('SubDistrict', subDistrictSchema)
module.exports = SubDistrictModel