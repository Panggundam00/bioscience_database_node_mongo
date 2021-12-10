const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const districtSchema = new Schema({
    id: Number,
    name: String,
});

const DistrictModel = mongoose.model('District', districtSchema)
module.exports = DistrictModel