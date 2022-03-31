var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills');


/* GET users listing. */
//localhost:3000/skills
router.get('/', skillController.index);
router.get('/new', skillController.new)
router.get('/:id', skillController.show);
//.index is the function we exported from the controllers/todos
router.get('/:id/edit', skillController.edit)

router.post('/', skillController.create);

router.delete('/:id', skillController.delete);

module.exports = router;
