'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
const controllers = require('../src/controllers/controller-helper');

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '../src/view/Login/login.html'));
});
router.route('/login')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../src/view/Login/login.html'));
        res.end('Invalid Username / password');
    });
router.post('/home', (req, res) => {
    console.log("POST Data", req.body);
    if (controllers.LoginController.validateLogin(req.body))
        res.sendFile(path.join(__dirname, '../src/view/Home/home.html'));
    else {
        res.redirect('/login',);
    }
});

module.exports = router;