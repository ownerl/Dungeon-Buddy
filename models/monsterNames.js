const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monsterNameSchema = new Schema(
    {
        name: String,
        slug: String,
    }
);

module.exports = mongoose.model("MonsterName", monsterNameSchema);
