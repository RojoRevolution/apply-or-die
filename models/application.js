const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  date: { type: Date, default: Date.now },
  status: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  listing: { type: String, required: true },
  description: { type: String, required: true }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
