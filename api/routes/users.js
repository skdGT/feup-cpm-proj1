var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.controller');

router.post('/', usersController.registerUser);
router.get('/:uuid', usersController.getUserByUUID);

module.exports = router;