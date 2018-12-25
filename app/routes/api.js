/// <reference path='../typings/express/express.d.ts' />
/// <reference path='../typings/request/request.d.ts' />
"use strict";
var express = require('express');
var request = require('request');
var config = require('../config/config');
var auth = require('../authinfo');
var router = express.Router();
var authInfo = new auth.AuthInfo(config.consumerKey, config.consumerSecret);
router.get('/token', function (req, res) {
    request.post(authInfo.Authentication, { form: authInfo.Credentials }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});
module.exports = router;

//# sourceMappingURL=api.js.map
