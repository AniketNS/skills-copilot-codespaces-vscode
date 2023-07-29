//Create a web server
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// GET /comments
router.get('/', commentsCtrl.index);
// POST /comments
router.post('/', commentsCtrl.create);
// DELETE /comments/:id
router.delete('/:id', commentsCtrl.delete);

module.exports = router;
