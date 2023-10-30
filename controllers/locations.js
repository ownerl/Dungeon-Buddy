const MonsterName = require('../models/monsterNames');

module.exports = {
    index
}

const ROOT_URL = 'https://api.open5e.com/v1';

async function index(req, res) {
    let monsterNames = await MonsterName.find({});
    //console.log(monstas.results[3].name, typeof monstas.results[3].name, ' type of thingy')
    // res.json(monstas)
    res.render("locations/index", {
        title: "Homepage",
        monsters: monsterNames,
    });
}