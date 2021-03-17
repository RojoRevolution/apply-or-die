const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  date: { type: Date, default: Date.now },
  status: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  listing: { type: String, required: false },
  description: { type: String, required: false },
  notes: [{ type: String, required: false }]
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
