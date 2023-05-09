const express = require('express')
const { startServer } = require('./controllers/dashboard.controller')
const app = express()
require('dotenv').config()

const cors = require('cors')
app.use(cors())


const userRoute = require('./routes/user.route')

const PORT = process.env.PORT1 || process.env.PORT2


app.use('/', userRoute)
app.listen(PORT, startServer)