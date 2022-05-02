const express = require('express');
const siteControllers = require('../controllers/siteControllers');
const route = express.Router();

route.use('/', siteControllers.home);

module.exports = route;