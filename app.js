const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/error-handler')

// Middleware
app.use(express.static('./public'))
app.use(express.json())

// Routes

app.use('/api/v1/tasks', tasks)

app.use(errorHandlerMiddleware)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
