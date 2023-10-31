const MonsterName = require('../models/monsterNames');
const Campaign = require('../models/campaign');
const ROOT_URL = 'https://api.open5e.com/v1/monsters/?slug__in=';

module.exports = {
    index,
    delete: deleteLocation,
    addMonster,
    updateLocation,
}

async function index(req, res) {
    const monsterNames = await MonsterName.find({});
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    let location = campaign.locations.id(req.params.locationId);
    const monsters = location.monsters;
    console.log('this shoudlbe monster array ==> ',monsters);
    //const locId = location._id
    // console.log('campaign ====> ', campaign)
    // console.log('location ====> ', location)
    // console.log('location ====> ', location._id)
    res.render("locations/index", {
        location,
        //locId,
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
    console.log(campaign)
    console.log('location one ---> ',location)
    console.log(req.body.monsterList)
    console.log(req.body)
    const newMonster = req.body.monsterList.split('@');
    console.log(newMonster)
    // console.log(req.body["options-value2"])
    // const newMonster = {
    //     name: 'name: ' + req.body.monsterList,
    //     slug: req.body.monsterSlug,
    // }
    location.monsters.push(
            {
                name: newMonster[1],
                slug: newMonster[0],
            }
        );
    // await campaign.save();
    // let location = 'null';
    // campaign.locations.forEach(item => 
    //     {
    //         if (item._id.toString() === req.params.locationId) {
    //             console.log('matchhhh')
    //             return location = item;
    //         }
    //     }
    // );
    // location.monsters.push(req.body.monsterList);
    campaign.save();
    res.redirect(`/locations/${req.params.campaignId}/${req.params.locationId}`);
}

async function updateLocation(req, res) {
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    const location = campaign.locations.id(req.params.locationId)
    location.locationTitle = 'req.body.title'
}