module.exports = {
    index,
    delete: deleteUser,
}

function index(req, res) {
    res.render("users/index", {
        title: "Users",
    });
};

function deleteUser(req, res) {
    res.redirect("/");
}