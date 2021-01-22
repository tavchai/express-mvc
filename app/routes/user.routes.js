
const express = require('express');
const user = require('../controllers/user.controller');
const { deleteById } = require('../models/user.model');

const router = express.Router();

// user all
router.get('/', user.findAll);

// find by id
router.get('/:id', user.findById);

// create user
router.post('/',user.create);

// userdate user by id
router.put('/:id',user.updateUserById);

// delete user by id
router.delete('/:id',user.deleteById);

module.exports = router;