const User = require('../model/User');
const userController = {
  userList: [
    { id: 1, name: 'Phitchaya', gender: 'M' },
    { id: 2, name: 'Test1', gender: 'M' }
  ],
  lastId: 3,
  async addUser (req, res) {
    const payload = req.body
    // res.json(userController.addUser(payload))
    console.log(payload)
    const user = new User(payload)
    try {
      await user.save()
      res.json(user)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async updateUser (req, res) {
    const payload = req.body
    // res.json(userController.updateUser(payload))
    try {
      const user = await User.updateOne({ _id: payload._id }, payload)
      res.json(user)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async deleteUser (req, res) {
    const { id } = req.params
    // res.json(userController.deleteUser(id))
    try {
      const user = await User.deleteOne({ _id: id })
      res.json(user)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async getUsers (req, res) {
    try {
      const users = await User.find({})
      res.json(users)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async getUser (req, res) {
    const { id } = req.params
    try {
      const users = await User.findById(id)
      res.json(users)
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports = userController
