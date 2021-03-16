const mongoose = require("mongoose");
const db = require("../models");



// WILL NEED TO UPDATE FILE FOR DEPLOY

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/applyordie"
);

const appSeed = [
    {
        // date: new Date(Date.now()),
        date: "03/15/21",
        status: "Applied",
        title: "Mid Level Web Developer",
        company: "Google Inc.",
        location: "Austin, TX",
        listing: "",
        description: ""
    },
    {
        // date: new Date(Date.now()),
        date: "03/14/21",
        status: "Ghosted",
        title: "React Developer",
        company: "Facebook",
        location: "Austin, Tx",
        listing: "",
        description: ""
    },
    {
        // date: new Date(Date.now()),
        date: "03/13/21",
        status: "Screen",
        title: "Full Stack Developer",
        company: "Frog",
        location: "Austin, Tx",
        listing: "",
        description: ""
    },
    {
        // date: new Date(Date.now()),
        date: "03/12/21",
        status: "Interview",
        title: "Front End Developer",
        company: "Helms Workshop",
        location: "Austin, Tx",
        listing: "",
        description: ""
    },
    {
        // date: new Date(Date.now()),
        date: "03/12/21",
        status: "Offer",
        title: "React Developer",
        company: "Chimi",
        location: "Austin, Tx",
        listing: "",
        description: ""
    },

];

db.Application
    .remove({})
    .then(() => db.Application.collection.insertMany(appSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
