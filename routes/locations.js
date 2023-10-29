const express = require('express');
const router = express.Router();
const passport = require('passport');
const locationsController = require('../controllers/locations.js');
const ensureLogin = require('../config/ensureLogin.js');

router.get('/', ensureLogin, locationsController.index);

module.exports = router;
