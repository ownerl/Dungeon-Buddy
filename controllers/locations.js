module.exports = {
    index
}

const ROOT_URL = 'https://api.open5e.com/v1';

function index(req, res) {
    fetch(`${ROOT_URL}/monsters/?limit=2439`)
    .then((res) => res.json())
    .then((monstas) => {
        console.log(monstas, typeof monstas, " type of thingy");
        //console.log(monstas.results[3].name, typeof monstas.results[3].name, ' type of thingy')
        // res.json(monstas)
        res.render("locations/index", {
            title: "Homepage",
            monsters: monstas.results,
        });
    });
}