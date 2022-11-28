const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// Middleware
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(port, console.log(`Listening on port ${port}`))