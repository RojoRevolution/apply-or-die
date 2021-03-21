const mongoose = require("mongoose");
// const bcrypt = require('../node_modules/bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    noteData: {
        type: String,
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;
