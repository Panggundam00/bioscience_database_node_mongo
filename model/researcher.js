const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const researcherSchema = new Schema({
    id: Number,
    name: String,
    organization_id: Number,
});

const ResearcherModel = mongoose.model('Researcher', researcherSchema)
module.exports = ResearcherModel