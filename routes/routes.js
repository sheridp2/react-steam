const express = require('express')
const router = express.Router()
const controllers = require('./controllers/controllers')

router.get('/test-send', controllers.testSend)

module.exports = router