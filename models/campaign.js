const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema(
    {
        name: String,
        slug: String,
    }
)

const locationsSchema = new Schema(
    {
        locationTitle: String,
        locationDescription: String,
        locationImage: String,
        campaignId: String,
        monsters: [monsterSchema],
    }
)

const campaignSchema = new Schema(
    {
        creatorId: String,
        campaignTitle: String,
        campaignDescription: String,
        campaignImage: String,
        locations: [locationsSchema],
    }
)

module.exports = mongoose.model('Campaign', campaignSchema);