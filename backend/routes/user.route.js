const express = require('express')
const { getUserLandingPage, getSlashUser, postStudentInfo } = require('../controllers/dashboard.controller')
const router = express.Router()

router.get('/', getUserLandingPage)
router.get('/user', getSlashUser)
router.post('/post', postStudentInfo)



module.exports = router