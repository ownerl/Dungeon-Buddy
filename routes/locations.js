const express = require('express');
const router = express.Router();
const passport = require('passport');
const locationsController = require('../controllers/locations.js');
const ensureLogin = require('../config/ensureLogin.js');

router.get('/:campaignId/:locationId', ensureLogin, locationsController.index);

router.delete('/:campaignId/:locationId', ensureLogin, locationsController.delete);

module.exports = router;
