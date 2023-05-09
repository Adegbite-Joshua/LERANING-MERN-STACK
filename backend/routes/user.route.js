const express = require('express')
const { getUserLandingPage, getSlashUser } = require('../controllers/dashboard.controller')
const router = express.Router()

router.get('/', getUserLandingPage)
router.get('/user', getSlashUser)

module.exports = router