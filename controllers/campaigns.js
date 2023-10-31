const Campaign = require('../models/campaign');

module.exports = {
    index,
    delete: deleteCampaign,
    create,
};

async function index(req, res) {
    let campaign = await Campaign.findById( req.params.campaignId );
    //console.log('LOG OF CAMPAIGN ---> ', campaign);
    res.render("campaigns/index", {
        campaign,
    });
}

async function deleteCampaign(req, res) {
    await Campaign.findOneAndDelete({ '_id': req.params.campaignId })
    console.log('campaign was deleted!')
    res.redirect("/users");
}

async function create(req, res) {
    let campaign = await Campaign.findById( req.params.campaignId );
    // console.log(req.body);
    // console.log(req.body.locationTitle);
    campaign.locations.push({ 
        locationTitle: req.body.locationTitle,
        locationDescription: req.body.locationDescription,
        locationImage: req.body.locationImage,
        campaignId: req.params.campaignId,

    });
    campaign.save();
    console.log(campaign)
    console.log(campaign.locations)
    // let newLocation = Campaign.create(
    //     {
    //         creatorId: req.user._id,
    //         campaignTitle: req.body.campaignTitle,
    //         campaignDescription: req.body.campaignDescription,
    //         campaignImage: req.body.campaignImage,
    //         locations: [],
    //     }
    //)
    console.log('successfully made a new location');
    res.redirect("/users");
}