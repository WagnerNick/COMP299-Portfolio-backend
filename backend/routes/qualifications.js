const express = require('express');
const router = express.Router();
const controller = require('../controllers/qualificationController');
const auth = require('../middleware/auth'); // optional protect

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.delete('/', controller.removeAll);

module.exports = router;
