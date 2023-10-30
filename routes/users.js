const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/users.js');
const ensureLogin = require('../config/ensureLogin.js');

router.get('/', ensureLogin, usersController.index);

router.delete('/:userId', ensureLogin, usersController.delete);

router.post('/:userId/campaigns', ensureLogin, usersController.create);



module.exports = router;
