const express = require('express')
const router = express.Router()

// mock data
const products = [
  {
    id: 1001,
    name: 'Node.js for Beginners',
    category: 'Node',
    price: 990
  },
  {
    id: 1002,
    name: 'React 101',
    category: 'React',
    price: 3990
  },
  {
    id: 1003,
    name: 'Getting started with MongoDB',
    category: 'MongoDB',
    price: 1990
  }
]
router.get('/', (req, res) => {
  res.json(products)
})

router.get('/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params
  const result = products.find(product => product.id === parseInt(id))
  res.json(result)
})
router.post('/', (req, res) => {
  const payload = req.body
  products.push(payload)
  res.json(payload)

})
router.put('/', (req, res) => {
  const payload = req.body
  const index = products.findIndex(product => product.id === payload.id)
  products.splice(index, 1, payload)
  res.json(payload)
})
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const index = products.findIndex(product => product.id === id)
  products.splice(index, 0)
  res.json({ id })
})

module.exports = router
