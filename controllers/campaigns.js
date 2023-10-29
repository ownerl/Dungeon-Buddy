module.exports = {
    index,
    show,
};

function index(req, res) {
    res.render("campaigns/index", {
        title: "Homepage",
    });
}

function show(req, res) {
    
}