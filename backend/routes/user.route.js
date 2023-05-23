const express = require('express')
const { getUserLandingPage, getSlashUser, postStudentInfo, saveFile } = require('../controllers/dashboard.controller')
const router = express.Router()

router.get('/', getUserLandingPage)
router.get('/user', getSlashUser)
router.post('/post', postStudentInfo)
router.post('/cloud', saveFile)



module.exports = router