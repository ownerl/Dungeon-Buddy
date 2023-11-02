const MonsterName = require('../models/monsterNames');
const Campaign = require('../models/campaign');
const ROOT_URL = 'https://api.open5e.com/v1/monsters/?slug__in=';

module.exports = {
    index,
    delete: deleteLocation,
    addMonster,
    removeMonster,
    updateLocation,
}

async function index(req, res) {
    const monsterNames = await MonsterName.find({});
    const campaign = await Campaign.findOne({ '_id': req.params.campaignId });
    let location = campaign.locations.id(req.params.locationId);
    const monsters = location.monsters;
    res.render("locations/index", {
        location,
        campaign,
        monsters,
        monstersList: monsterNames,
    });
}

async function deleteLocation(req, res) {
    const campaign = await Campaign.findOne({ '_id': req.params.campaignId });
    const location = req.params.locationId;
    await campaign.locations.id(location).deleteOne();
    await campaign.save();
    res.redirect(`/campaigns/${campaign._id}`);
}

async function addMonster(req, res) {
    const campaign = await Campaign.findOne({ '_id': req.params.campaignId });
    const location = campaign.locations.id(req.params.locationId)
    const newMonster = req.body.monsterList.split('@');
    location.monsters.push(
        {
            name: newMonster[1],
            slug: newMonster[0],
        }
    );

    campaign.save();
    res.redirect(`/locations/${req.params.campaignId}/${req.params.locationId}`);
}

async function removeMonster(req, res) {
    const campaign = await Campaign.findOne({ '_id': req.params.campaignId });
    const location = campaign.locations.id(req.params.locationId)
    location.monsters.remove(req.body.monsterId);
    await campaign.save();
    res.redirect(`/locations/${req.params.campaignId}/${req.params.locationId}`);
}

async function updateLocation(req, res) {
    const campaign = await Campaign.findOne({ '_id': req.params.campaignId });
    const location = campaign.locations.id(req.params.locationId)
    location.locationTitle = req.body.locationUpdateTitle;
    location.locationDescription = req.body.locationUpdateDescription;
    location.locationImage = req.body.locationUpdateImage;
    await campaign.save();
    res.redirect(`/locations/${req.params.campaignId}/${req.params.locationId}`);
}