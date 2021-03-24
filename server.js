const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const path = require("path")


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
// ==========================
// FOR LOCAL DEV
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log('===== PRODUCTION ====')
  app.use(express.static(path.join(__dirname, "client/build")));
}

// ==========================
// FOR PRODUCTION
// app.use(express.static(path.join(__dirname, "client/build")));
// ==========================

app.use(session({ secret: "chimichanga", resave: true, saveUninitialized: true }));
app.use(cookieParser("chimichanga"))
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
// Middleware Ends
// ============================================


// Add routes, both API and view
app.use(routes);

// ========================
// FOR PRODUCTION USE
// try {
//   // Connect to the MongoDB cluster
//   mongoose.connect(
//     MONGODB_URI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log(" Mongoose is connected")
//   );

// } catch (e) {
//   console.log("could not connect");
// }
// ========================
// FOR DEV USE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/applyordie");
// ========================

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
