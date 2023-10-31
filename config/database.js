const mongoose = require('mongoose');
const MonsterName = require('../models/monsterNames');

mongoose.connect(process.env.DATABASE_URL);
	
// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', async function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
    console.log(' runnning before ')
    let monsterName = await MonsterName.find({});
    if (monsterName.length < 1) {
      console.log(' this is running! ')
      fetch('https://api.open5e.com/v1/monsters/?limit=2439')
      .then((res) => res.json())
      .then((monstas) => {
        monstas.results.forEach(monster => {
          MonsterName.create({ name: monster.name, slug: monster.slug });
        })
      });
    }
});
