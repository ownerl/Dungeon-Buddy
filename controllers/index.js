module.exports = {
  index
}

const ROOT_URL = 'https://www.dnd5eapi.co'

function index(req, res) {
  fetch(`${ROOT_URL}/api/monsters/aboleth`)
  .then(res => res.json())
  .then(monstas => {
    //console.log(monstas, typeof monstas, ' type of thingy')
    //console.log(monstas.results[3].name, typeof monstas.results[3].name, ' type of thingy')
    // res.json(monstas)
    res.render("index", {
      title: "Homepage",
      monsters: monstas.results,
    });
  })
};
