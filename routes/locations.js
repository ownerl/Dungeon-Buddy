const express = require('express');
const router = express.Router();
const passport = require('passport');
const locationsController = require('../controllers/locations.js');
const ensureLogin = require('../config/ensureLogin.js');

router.get('/:campaignId/:locationId', ensureLogin, locationsController.index);

router.delete('/:campaignId/:locationId', ensureLogin, locationsController.delete);

router.post('/:campaignId/:locationId', ensureLogin, locationsController.addMonster);

router.put('/:campaignId/:locationId', ensureLogin, locationsController.removeMonster)

router.put('/:campaignId/:locationId/update', ensureLogin, locationsController.updateLocation);

module.exports = router;
