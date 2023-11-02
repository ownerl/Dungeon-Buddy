const User = require('../models/user');
const Campaign = require('../models/campaign');
const validImageUrl = require('../config/validImageUrl');

module.exports = {
    index,
    delete: deleteUser,
    create,
}

async function index(req, res) {
    const campaigns = await Campaign.find({});
    res.render("users/index", {
        campaigns,
    });
};

async function deleteUser(req, res) {
    const user = await User.findOne({ '_id': req.user._id });
    if (!user) return res.redirect('/');
    await User.findOneAndDelete({ '_id': req.user._id });
    res.redirect("../logout");
}

async function create(req, res) {
    const campaigns = await Campaign.find({});
    let imageUrl = req.body.campaignImage;
    if (!validImageUrl(imageUrl)) {
        return res.render("users/index", {
            campaigns,
            error: "Invalid image URL. URL must end with .jpg, .jpeg, .png, or .gif.",
        });
    }
    if (imageUrl.length < 1) {
        imageUrl = "https://feedthemultiverse.com/wp-content/uploads/2018/07/ozzyflat.jpg";
    }
    let newCampaign = Campaign.create(
        {
            creatorId: req.user._id,
            campaignTitle: req.body.campaignTitle,
            campaignDescription: req.body.campaignDescription,
            campaignImage: imageUrl,
            locations: [],
        }
    )
    res.redirect("/users");
}