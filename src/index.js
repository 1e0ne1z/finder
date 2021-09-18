const express = require('express')
const userRouter = require('./routers/user')
const sequelize = require('./db/sequelize')
const User = require('./models/user')

const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})