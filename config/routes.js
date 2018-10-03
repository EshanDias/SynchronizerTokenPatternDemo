"use strict";
const express = require("express");
const router = express.Router();
const path = require("path");
const controllers = require("../src/controllers/controller-helper");

var token;

router.get("/", (req, res) => {
  if (!req.session.user) {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, "../src/view/Login/login.html"));
  } else {
    res
      .status(200)
      .sendFile(path.join(__dirname, "../src/view/Home/home.html"));
  }
});
router
  .route("/login")
  .get((req, res) => {
    if (!req.session.user) {
      res.status(200).sendFile(path.join(__dirname, "../src/view/Login/login.html"));
    } else {
      res.redirect("/home");
    }
  })
  .post((req, res) => {
    if (controllers.LoginController.validateLogin(req.body)) {
      req.session.user = req.body;
      res.status(200).redirect("/home");
    } else {
      res.status(500).redirect("/login");
    }
  });
router.get("/home", (req, res) => {
  if (req.session.user) {
    res
      .status(200)
      .sendFile(path.join(__dirname, "../src/view/Home/home.html"));
  } else {
    res.redirect("/login");
  }
});
router.post("/logout", (req, res) => {
  if (req.session) {
    req.session == undefined;
  }
    res.redirect("/login");
});
router.post("/getToken", (req, res) => {
    if (!req.session.user) {
        res.status(404).redirect("/login");
    } else {
        token = req.session.csrfToken;
        res.send(req.session.csrfToken);
    }
})
router.post("/test", (req, res) => {
    console.log("body csrf", req.body);
    console.log("server token", token);
    if (req.body.csrfToken == token) {
      res.status(200).send("CSRF Validated")
    }
      res.status(500).send("CSRF does not match");
  });

module.exports = router;
