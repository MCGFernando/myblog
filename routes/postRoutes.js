const express = require('express')
const postController = require('../controllers/postController')
const router = express.Router()


router.get('/', postController.post_new)
router.post('/', postController.post_create)
router.get('/:id', postController.post_list_id)
/* router.get('/new', categoriaController.categoria_new)

router.post('/', categoriaController.categoria_create)
router.get('/:id', categoriaController.categoria_list_id)

router.delete('/:id', categoriaController.categoria_delete)
router.put('/:id', categoriaController.categoria_update)
 */

module.exports = router