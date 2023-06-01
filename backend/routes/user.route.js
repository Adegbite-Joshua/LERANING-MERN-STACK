const express = require('express')
const { getUserLandingPage, getSlashUser, postStudentInfo, saveFile, getNodeMailer } = require('../controllers/dashboard.controller')
const router = express.Router()

router.get('/', getUserLandingPage)
router.get('/user', getSlashUser)
router.post('/post', postStudentInfo)
router.post('/cloud', saveFile)
router.get('/mail', getNodeMailer)



module.exports = router