const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monsterNames = new Schema(
    {
        name: String,
    }
);

module.exports = mongoose.model("MonsterName", monsterNames);
