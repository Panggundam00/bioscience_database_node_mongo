const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const microorganismSchema = new Schema({
    id: Number,
    ku_id: String,
    other_microbial_code: String,
    isolate_code: String,
    strain_code: String,
    microorganism_type_id: Number,
    microorganism_subtype_id: Number,
    scientific_name: String,
    full_scientific_name: String,
    nomenclatural_code: String,
    synonym: String,
    higher_taxon: String,
    kingdom: String,
    phylum: String,
    class: String,
    order: String,
    family: String,
    genus: String,
    specific_epithet: String,
    subspecies: String,
    variety: String,
    colony_morphology: String,
    cell_morphology: String,
    source: String,
    location_remarks: String,
    found_description: String,
    ecology: String,
    sub_district_id: Number,
    district_id: Number,
    province_id: Number,
    gps: String,
    surveyer_id: Number,
    survey_date: Date,
    sampling_date: Date,
    sampling_by_id: Number,
    isolation_date: Date,
    identification_by: Number,
    isolation_by: Number,
    found_status: String,
    found_by: Number,
    found_period: String,
    keyword: String,
    organization_by: Number,
    found_year: String,
    document_published: String,
    document_url: String,
    culture_collection_assession_number: String,
    storage_method: String,
    special_characteristic: String,
    culture_media: String,
    temperature_for_growth: String,
    oxygen_demand: String,
    storage_condition: String,
    growth_condition: String,
    ph_for_culture_media: String,
    agricultural_application_id: Number,
    agriculture_application_details: String,
    industrial_application_id: Number,
    industrial_application_details: String,
    others_applications: String,
    recorder_id: Number,
    project_number: String
});

const MicroorganismModel = mongoose.model('Microorganism', microorganismSchema)
module.exports = MicroorganismModel