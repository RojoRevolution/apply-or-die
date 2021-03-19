const mongoose = require("mongoose");
// const bcrypt = require('../node_modules/bcryptjs');
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
    applications: [{ type: Schema.Types.ObjectID, ref: 'application' }]

});



// Version 3
// userSchema.methods = {
//     checkPassword: function (password) {
//         // console.log(bcrypt.compareSync(password,this.password))
//         return bcrypt.compareSync(password, this.password)
//     },
//     hashPassword: function (password) {
//         return bcrypt.hashSync(password, 10)
//     }
// };

// userSchema.pre('save', function (next) {
//     if (!this.password) {
//         console.log('No password')
//     } else {
//         console.log('Password Saved')
//         this.password = this.hashPassword(this.password);
//         next();
//     }
// })


const User = mongoose.model("User", userSchema);

module.exports = User;
