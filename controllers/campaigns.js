const Campaign = require('../models/campaign');
const validImageUrl = require('../config/validImageUrl');

module.exports = {
    index,
    delete: deleteCampaign,
    create,
    updateCampaign,
};

async function index(req, res) {
    const campaign = await Campaign.findById( req.params.campaignId );
    console.log('LOG OF CAMPAIGN ---> ', campaign);
    res.render("campaigns/index", {
        campaign,
        error: null, 
    });
}

async function deleteCampaign(req, res) {
    const campaign = await Campaign.findOneAndDelete({ '_id': req.params.campaignId })
    console.log('campaign was deleted!')
    console.log('campaign thingy')
    res.redirect("/users");
}

async function create(req, res) {
    const campaign = await Campaign.findById( req.params.campaignId );
    // console.log(req.body);
    // console.log(req.body.locationTitle);
    let imageUrl = req.body.locationImage;
    console.log(req.body.locationImage);
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
    await campaign.save();
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

async function updateCampaign(req, res) {
    const campaign = await Campaign.findById( req.params.campaignId );
    campaign.campaignTitle = req.body.campaignUpdateTitle;
    campaign.campaignDescription = req.body.campaignUpdateDescription;
    campaign.campaignImage = req.body.campaignUpdateImage;
    await campaign.save();
    res.redirect(`/campaigns/${req.params.campaignId}`);
}
