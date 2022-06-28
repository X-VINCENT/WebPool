const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')

require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use('/api/', apiRoutes())

app.use((req, res) => {
  res.status(404).send('Sorry not found ! Error 404 !')
})

app.use((req, res) => {
  res.status(500).send('Sorry ! Something broke !')
})

app.listen(process.env.PORT, function () {
  console.log(`Server listening on port ${process.env.PORT}.`)
})
