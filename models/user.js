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

// Version 1

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

// Version 2

// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// }

// userSchema.methods.validPassword = function (password, encrypted) {
//     return bcrypt.compareSync(password, encrypted);
// }

// Version 3
userSchema.methods = {
    checkPassword: function (password) {
        // console.log(bcrypt.compareSync(password,this.password))
        return bcrypt.compareSync(password, this.password)
    },
    hashPassword: function (password) {
        return bcrypt.hashSync(password, 10)
    }
};

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('No password')
    } else {
        console.log('Password Saved')
        this.password = this.hashPassword(this.password);
        next();
    }
})


const User = mongoose.model("User", userSchema);

module.exports = User;
