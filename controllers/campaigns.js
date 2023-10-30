const Campaign = require('../models/campaign');

module.exports = {
    index,
};

async function index(req, res) {
    let campaign = await Campaign.findById( req.params.campaignId )
    console.log('LOG OF CAMPAIGN ---> ', campaign)
    res.render("campaigns/index", {
        campaign,
    });
}