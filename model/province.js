const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const provinceSchema = new Schema({
    id: Number,
    name: String,
});

const ProvinceModel = mongoose.model('Province', provinceSchema)
module.exports = ProvinceModel