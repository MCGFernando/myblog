const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/signup', userController.user_new)
router.post('/', userController.user_create)
/* router.get('/new', categoriaController.categoria_new)

router.post('/', categoriaController.categoria_create)
router.get('/:id', categoriaController.categoria_list_id)

router.delete('/:id', categoriaController.categoria_delete)
router.put('/:id', categoriaController.categoria_update) */


module.exports = router