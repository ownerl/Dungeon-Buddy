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
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    let location = campaign.locations.id(req.params.locationId);
    const monsters = location.monsters;
    console.log('this shoudlbe monster array ==> ',monsters);
    res.render("locations/index", {
        location,
        campaign,
        monsters,
        monstersList: monsterNames,
    });
}

async function deleteLocation(req, res) {
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    const location = req.params.locationId;
    console.log('location ->>>>',location)
    console.log('campaign was deleted!')
    res.redirect(`/campaigns/${campaign._id}`);
}

async function addMonster(req, res) {
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    const location = campaign.locations.id(req.params.locationId)
    // console.log(campaign)
    // console.log('location one ---> ',location)
    // console.log(req.body.monsterList)
    // console.log(req.body)
    const newMonster = req.body.monsterList.split('@');
    // console.log(newMonster)
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
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    const location = campaign.locations.id(req.params.locationId)
    // console.log(campaign)
    // console.log('MONSTETR ID IN BODY --> ', req.body.monsterId)
    location.monsters.remove(req.body.monsterId);
    await campaign.save();
    res.redirect(`/locations/${req.params.campaignId}/${req.params.locationId}`);
}

async function updateLocation(req, res) {
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    const location = campaign.locations.id(req.params.locationId)
    location.locationTitle = req.body.newLocationTitle;
    location.locationDescription = req.body.newLocationTitle;
}