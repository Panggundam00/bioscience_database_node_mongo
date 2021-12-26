const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const microorganismSchema = new Schema({
    //General Information
    id: Number,
    full_scientific_name: String,
    scientific_name: String,
    ku_code: String,
    other_microbial_code: String,
    isolate_code: String,
    strain_code: String,
    microorganism_type_id: Number,
    microorganism_subtype_id: Number,
    higher_taxon: String,
    kingdom: String,
    phylum: String,
    class: String,
    order: String,
    family: String,
    genus: String,
    species: String,
    subspecies: String,
    variety: String,
    nomenclatural_code: String,
    synonym: String,
    colony_morphology: String,
    cell_morphology: String,

    //Location
    source: String,
    location_remarks: String,
    found_description: String,
    surveyer_id: Number,
    survey_date: Date,
    sampling_by_id: Number,
    sampling_date: Date,
    isolation_by: Number,
    isolation_date: Date,
    identification_by: Number,
    found_status: String,
    found_by: Number,
    found_date: String,
    culture_collection_assession_code: String,

    //Storage Methods & Conditions
    ecology: String,
    storage_method: String,
    special_characteristic: String,
    culture_media: String,
    temperature_for_growth: String,
    oxygen_demand: String,
    storage_condition: String,
    growth_condition: String,
    ph_for_culture_media: String,

    //Application Information
    agricultural_application_id: Number,
    agriculture_application_details: String,
    industrial_application_id: Number,
    industrial_application_details: String,
    others_applications: String,

    //Bibliography
    project_number: String,
    keyword: String,
    organization_by: Number,
    document_published: String,
    document_url: String,
    recorder_id: Number
});

const MicroorganismModel = mongoose.model('Microorganism', microorganismSchema)
module.exports = MicroorganismModel