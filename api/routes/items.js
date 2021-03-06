const itemsController = require('../controllers/items.controller');
const express = require('express');
const router = express.Router()

router.get("/", itemsController.getAllItems)
router.get("/:uuid", itemsController.getItemByUUID)
router.get('/barcode/:barcode', itemsController.getItemByBarcode)

module.exports = router