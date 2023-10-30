const User = require('../models/user');
const Campaign = require('../models/campaign');

module.exports = {
    index,
    delete: deleteUser,
    create,
}

async function index(req, res) {
    let campaigns = await Campaign.find({});
    res.render("users/index", {
        campaigns,
        title: "Users",
    });
};

async function deleteUser(req, res) {
    console.log(req.params.userId, ' <--- userID');
    const user = await User.findOne({ '_id': req.user._id });
    console.log('before removal :', user);
    if (!user) return res.redirect('/');
    await User.findOneAndDelete({ '_id': req.user._id });
    res.redirect("../logout");
}

async function create(req, res) {

    console.log('successfully made a new campaign');
    console.log(req.body);
    console.log(req.body.campaignTitle);
    
    let newCampaign = Campaign.create(
        {
            creatorId: req.user._id,
            campaignTitle: req.body.campaignTitle,
            campaignDescription: req.body.campaignDescription,
            campaignImage: req.body.campaignImage,
            locations: [],
        }
    )
    res.redirect("/users");
}