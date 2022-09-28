const express = require('express')
const router = express.Router()

const studentController = require('../controllers/StudentController')

router.get('/:id', studentController.showGet)
router.post('/:id', studentController.showPost)
router.use('/', studentController.index)

module.exports = router