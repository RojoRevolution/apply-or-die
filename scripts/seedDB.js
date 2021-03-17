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
        listing: "https://www.indeed.com/jobs?q=web%20Developer&l=Austin%2C%20TX&fromage=7&vjk=ec8bcfbeb7a4e775",
        description: "A class condimentum parturient potenti iaculis a quam tempus vivamus condimentum rutrum eget a massa sit orci habitasse penatibus bibendum.",
        notes: ["Note 1", "Note2"]
    },
    {
        // date: new Date(Date.now()),
        date: "03/14/21",
        status: "Ghosted",
        title: "React Developer",
        company: "Facebook",
        location: "Austin, Tx",
        listing: "https://www.indeed.com/jobs?q=web%20Developer&l=Austin%2C%20TX&fromage=7&vjk=ec8bcfbeb7a4e775",
        description: "A class condimentum parturient potenti iaculis a quam tempus vivamus condimentum rutrum eget a massa sit orci habitasse penatibus bibendum.",
        notes: [{
            noteEntry: "",
        }]
    },
    {
        // date: new Date(Date.now()),
        date: "03/13/21",
        status: "Screen",
        title: "Full Stack Developer",
        company: "Frog",
        location: "Austin, Tx",
        listing: "https://www.indeed.com/jobs?q=web%20Developer&l=Austin%2C%20TX&fromage=7&vjk=ec8bcfbeb7a4e775",
        description: "A class condimentum parturient potenti iaculis a quam tempus vivamus condimentum rutrum eget a massa sit orci habitasse penatibus bibendum.",
        notes: [{
            noteEntry: "",
        }]
    },
    {
        // date: new Date(Date.now()),
        date: "03/12/21",
        status: "Interview",
        title: "Front End Developer",
        company: "Helms Workshop",
        location: "Austin, Tx",
        listing: "https://www.indeed.com/jobs?q=web%20Developer&l=Austin%2C%20TX&fromage=7&vjk=ec8bcfbeb7a4e775",
        description: "Primis sem ac eget dui eros natoque consequat a per at dolor ultrices nullam parturient proin lectus magna cubilia ad ut. Donec vel quisque bibendum per iaculis enim condimentum a et litora facilisi accumsan adipiscing turpis torquent suspendisse scelerisque a.",
        notes: [{
            noteEntry: "",
        }]
    },
    {
        // date: new Date(Date.now()),
        date: "03/12/21",
        status: "Offer",
        title: "React Developer",
        company: "Chimi",
        location: "Austin, Tx",
        listing: "https://www.indeed.com/jobs?q=web%20Developer&l=Austin%2C%20TX&fromage=7&vjk=ec8bcfbeb7a4e775",
        description: "Primis sem ac eget dui eros natoque consequat a per at dolor ultrices nullam parturient proin lectus magna cubilia ad ut. Donec vel quisque bibendum per iaculis enim condimentum a et litora facilisi accumsan adipiscing turpis torquent suspendisse scelerisque a.",
        notes: [{
            noteEntry: "",
        }]
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
