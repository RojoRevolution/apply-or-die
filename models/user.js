const mongoose = require("mongoose");
const bcrypt = require('../node_modules/bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        // required: [true, "Username is required"]
    },
    password: {
        type: String,
        unique: false,
        // required: [true, "password is required"]
    },

});

// Bcrypt Methods

// Compare
// userSchema.methods.validPassword = function (password, encrypted) {
//     return bcrypt.compareSync(password, encrypted);
// }
// Create
// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// }
// userSchema.methods.generateHash = function (password) {
//     console.log('GenerateHash Function" ', password)
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// }

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.validPassword = function (password, encrypted) {
    return bcrypt.compareSync(password, encrypted);
}


const User = mongoose.model("User", userSchema);

module.exports = User;
