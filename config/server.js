"user strict";
const express = require("express");
const session = require("express-session");
var cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const routes = require("./routes");
const uuid = require("uuid/v4");
var app = express();

const hostname = "localhost";
const port = "4000";

// app.use(session({
//     sessionId: function(req) {
//         return uuid();
//     },
//     secret: 'SSDAssignment1', resave: false, saveUninitialized: true, cookie: {maxAge: 24*60*60*1000}
// }))

app.use(
  cookieSession({
    name: "session",
    sessionId: uuid(),
    keys: ["SSDAssignment1"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use((req, res, next) => {
  if (req.session.csrfToken == undefined) req.session.csrfToken = uuid();
  next();
});

app.use(bodyParser());
// Get the routes
app.use("/", routes);

app.use(express.static(__dirname + "../../src/view"));
app.listen(port, hostname);
console.log(`Server running on http://${hostname}:${port}`);
