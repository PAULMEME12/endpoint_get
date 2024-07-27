const express = require('express');
const { obtenerLibroPorId } = require('../controllers/libroControllers');
const router = express.Router();

router.get('/libros/:id',obtenerLibroPorId);

module.exports = router