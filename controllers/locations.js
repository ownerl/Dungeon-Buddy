const MonsterName = require('../models/monsterNames');
const Campaign = require('../models/campaign');

module.exports = {
    index,
    delete: deleteLocation,
}

async function index(req, res) {
    let monsterNames = await MonsterName.find({});
    let campaign = await Campaign.findOne({ _id: req.params.campaignId })
    let location = null;
    campaign.locations.forEach(item => 
        {
            if (item._id.toString() === req.params.locationId) {
                console.log('matchhhh')
                location = item;
            }
        }
    );
    // console.log('campaign ====> ', campaign)
    // console.log('location ====> ', location)
    res.render("locations/index", {
        location,
        campaign,
        monsters: monsterNames,
    });
}

async function deleteLocation(req, res) {

}