const express = require('express');
const Status = require('../controllers/status.controller');
const router = express.Router();

// find all status 
router.get('/', Status.findAll);

// find by id
router.get('/:id', Status.findById);

// crate status
router.post('/', Status.create);

// update status
router.put('/:id',Status.update);

// remove status
router.delete('/:id',Status.remove);

module.exports = router;