const express = require('express')
const User = require('./models/user')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World, Caliman!')
})

User.sync({ alter: true }).then(result => {
  console.log("The table for the User model was created")
}).catch(err => {
  console.log(err)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})