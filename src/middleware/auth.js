const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log(req.header('Authorization'))
        const decoded = jwt.verify(token, 'thisIsAwesome')
        const user = await User.findOne({ where: {id: decoded.id , token: token} })        

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
        
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth