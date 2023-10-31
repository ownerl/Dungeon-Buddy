const Campaign = require('../models/campaign');
const validImageUrl = require('../config/validImageUrl');

module.exports = {
    index,
    delete: deleteCampaign,
    create,
};

async function index(req, res) {
    const campaign = await Campaign.findById( req.params.campaignId );
    console.log('LOG OF CAMPAIGN ---> ', campaign);
    let error = null;
    res.render("campaigns/index", {
        campaign,
        error, // <------------------------------ dry code? make ejs check if it exists instead?
    });
}

async function deleteCampaign(req, res) {
    const campaign = await Campaign.findOneAndDelete({ '_id': req.params.campaignId })
    console.log('campaign was deleted!')
    campaign.save();
    res.redirect("/users");
}

async function create(req, res) {
    const campaign = await Campaign.findById( req.params.campaignId );
    // console.log(req.body);
    // console.log(req.body.locationTitle);
    let imageUrl = req.params.locationImage;
    if (!validImageUrl(imageUrl)) {
        return res.render("campaigns/index", {
            campaign,
            error: "Invalid image URL. URL must end with .jpg, .jpeg, .png, or .gif.",
        });
    }
    campaign.locations.push({ 
        locationTitle: req.body.locationTitle,
        locationDescription: req.body.locationDescription,
        locationImage: req.body.locationImage,
        campaignId: req.params.campaignId,
    });
    campaign.save();
    // console.log(campaign)
    // console.log(campaign.locations)
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
    res.redirect(`/campaigns/${req.params.campaignId}`);
}