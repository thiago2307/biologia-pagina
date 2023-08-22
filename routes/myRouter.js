const express = require('express');
const router = express.Router();
const cadenasController = require('../controllers/myController');

router.get('/Cadena', CadenaController.getCadenas);


module.exports = router;