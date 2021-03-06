const express = require('express');
const router = express.Router();
const trController = require('../controllers/transactions.controller');

router.get('/user/:uuid', trController.getPastTransactions);
router.post('/token/:token', trController.validateToken);
router.post('/pay', trController.processPayment);

module.exports = router;
