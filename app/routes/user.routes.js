
const express = require('express');
const user = require('../controllers/user.controller');

const router = express.Router();

// user all
router.get('/', user.findAll);

// find by id
router.get('/:id', user.findById);

module.exports = router;