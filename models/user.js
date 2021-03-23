const mongoose = require("mongoose");
// const bcrypt = require('../node_modules/bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true
        // unique: true,
        // required: [true, "Username is required"]
    },
    email: {
        type: String,
        trim: true
        // unique: true,
        // required: [true, "Username is required"]
    },
    password: {
        type: String
        // required: [true, "password is required"]
    },
    userEntries: [{ type: Schema.Types.ObjectID, ref: 'Application' }]

});

const User = mongoose.model("User", userSchema);

module.exports = User;
