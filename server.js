const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")


const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// ============================================
// Middleware Starts
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "chimichanga", resave: true, saveUninitialized: true }));
app.use(cookieParser("chimichanga"))
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/applyordie");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
