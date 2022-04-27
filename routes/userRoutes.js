const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', userController.user_list)
router.post('/', userController.user_create)
router.get('/signup', userController.user_new)
router.get('/:id', userController.user_list_id)
router.put('/:id', userController.user_update)

//router.get('/signup', userController.user_new)

/* router.get('/new', categoriaController.categoria_new)

router.post('/', categoriaController.categoria_create)
router.get('/:id', categoriaController.categoria_list_id)

router.delete('/:id', categoriaController.categoria_delete)
router.put('/:id', categoriaController.categoria_update) */


module.exports = router