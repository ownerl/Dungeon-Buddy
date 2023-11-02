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
    res.render("campaigns/index", {
        campaign,
        error: null, 
    });
}

async function deleteCampaign(req, res) {
    const campaign = await Campaign.findOneAndDelete({ '_id': req.params.campaignId })
    res.redirect("/users");
}

async function create(req, res) {
    const campaign = await Campaign.findById( req.params.campaignId );
    let imageUrl = req.body.locationImage;
    if (!validImageUrl(imageUrl)) {
        return res.render("campaigns/index", {
            campaign,
            error: "Invalid image URL. URL must end with .jpg, .jpeg, .png, or .gif.",
        });
    }
    if (imageUrl.length < 1) {
        imageUrl = "/images/default-location.png";
    }
    campaign.locations.push({ 
        locationTitle: req.body.locationTitle,
        locationDescription: req.body.locationDescription,
        locationImage: imageUrl,
        campaignId: req.params.campaignId,
    });
    await campaign.save();
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
