const express = require('express')
const User = require('../models/user')
const router = new express.Router()

User.sync({ alter: true }).then(result => {
  console.log("The table for the User model was created")
}).catch(err => {
  console.log(err)
})

router.post('/users', async (req, res) => {
  const user = new User(req.body)

  try {
      await user.save()
      res.status(201).send({ user })
  } catch (err) {
      res.status(400).send(err)
  }
})

module.exports = router
