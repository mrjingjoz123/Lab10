const userService = {
  userList: [
    { _id: 1, name: 'Phitchaya', gender: 'M' },
    { _id: 2, name: 'Test1', gender: 'M' }
  ],
  lastId: 3,
  addUser (user) {
    user._id = this.lastId++
    this.userList.push(user)
  },
  updateUser (user) {
    const index = this.userList.findIndex(item => item._id === user._id)
    this.userList.splice(index, 1, user)
  },
  deleteUser (user) {
    const index = this.userList.findIndex(item => item._id === user._id)
    this.userList.splice(index, 1)
  },
  getUsers () {
    return [...this.userList]
  }
}
export default userService