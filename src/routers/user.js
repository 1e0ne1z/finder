const express = require('express')
const User = require('../models/user') //Import model as User
const router = new express.Router() // create new set of routes related to user model

User.sync({ alter: true }).then(result => { //sync table with model attributes
  console.log("The table for the User model was created")
}).catch(err => {
  console.log(err)
})

// create route for create new users
router.post('/users', async (req, res) => {
  const user = new User(req.body)

  try {
      await user.save()
      res.status(201).send({ user })
  } catch (err) {
      res.status(400).send(err)
  }
})

//export set of routes
module.exports = router
