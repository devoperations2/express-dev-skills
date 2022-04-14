var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);
router.get('/:id/edit', skillsCtrl.edit);
router.post('/', skillsCtrl.create);
router.delete('/:crazyamazing', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);


module.exports = router;