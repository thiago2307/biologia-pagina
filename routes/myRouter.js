const express = require('express');
const router = express.Router();
const cadenasController = require('../controllers/myController');

router.get('/Cadena', cadenasController.getCadenas);

module.exports = router;
