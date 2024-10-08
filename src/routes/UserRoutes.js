const express = require('express'); 
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/auth')

const router = express.Router();

router.post('/register', UserController.store); // p registro
router.post('login', UserController.login); // p login
router.get('/users', UserController.index); // p listar todos
router.get('users/:id', auth, UserController.show); // p Mostrar 
router.put('users/:id', auth, UserController.update); // p lterar dados usuario
router.delete('users/:id', auth, UserController.delete); // p deletar

module.exports = router;
