const express = require('express');
const router = express.Router();
const userController = require('../controller/UsersController');
// const User = require('../model/User');

/* GET users listing. */
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.addUser)
router.put('/', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router;
