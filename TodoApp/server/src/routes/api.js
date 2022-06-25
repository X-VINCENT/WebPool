const Router = require('express').Router

module.exports = () => {
  const api = new Router()

  api.get('/', async (req, res) => {
    console.log('Get')
    res.send('Welcome to the API.')
  })

  api.post('/', async (req, res) => {
    console.log('Post')
  })

  api.put('/', async (req, res) => {
    console.log('Put')
  })

  api.delete('/', async (req, res) => {
    console.log('Delete')
  })

  return api
}
