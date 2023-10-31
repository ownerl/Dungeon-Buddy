const express = require('express');
const router = express.Router();
const passport = require('passport');
const campaignsController = require('../controllers/campaigns.js');
const ensureLogin = require('../config/ensureLogin.js');


router.get('/:campaignId', ensureLogin, campaignsController.index);

router.delete('/:campaignId', ensureLogin, campaignsController.delete);

router.post('/:campaignId/locations', ensureLogin, campaignsController.create);

module.exports = router;
