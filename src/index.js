const express = require('express')
const userRouter = require('./routers/user') //import set of routes related to User

const app = express()
const port = 3000

app.use(express.json()) //set express to use JSON
app.use(userRouter) //attach User routes

app.listen(port, () => { //run server
  console.log(`App is listening at http://localhost:${port}`)
})