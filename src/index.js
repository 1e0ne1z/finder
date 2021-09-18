const express = require('express')
require('./db/sequelize')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World, Caliman!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})