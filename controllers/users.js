const User = require('../models/user')

module.exports = {
    index,
    delete: deleteUser,
}

async function index(req, res) {
    res.render("users/index", {
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