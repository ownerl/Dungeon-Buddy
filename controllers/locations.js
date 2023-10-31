const MonsterName = require('../models/monsterNames');
const Campaign = require('../models/campaign');

module.exports = {
    index,
    delete: deleteLocation,
}

async function index(req, res) {
    const monsterNames = await MonsterName.find({});
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    let location = 'null';
    campaign.locations.forEach(item => 
        {
            if (item._id.toString() === req.params.locationId) {
                console.log('matchhhh')
                return location = item;
            }
        }
    );
    //const locId = location._id
    console.log('campaign ====> ', campaign)
    console.log('location ====> ', location)
    console.log('location ====> ', location._id)
    res.render("locations/index", {
        location,
        //locId,
        campaign,
        monsters: monsterNames,
    });
}

async function deleteLocation(req, res) {
    const campaign = await Campaign.findOne({ _id: req.params.campaignId });
    const location = req.params.locationId;
    console.log('location ->>>>',location)
    console.log('campaign was deleted!')
    res.redirect("/");
}