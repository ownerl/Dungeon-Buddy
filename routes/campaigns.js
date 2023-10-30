const express = require('express');
const router = express.Router();
const passport = require('passport');
const campaignsController = require('../controllers/campaigns.js');
const ensureLogin = require('../config/ensureLogin.js');


router.get('/:campaignId', ensureLogin, campaignsController.index);

module.exports = router;
