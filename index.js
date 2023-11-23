require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) =>{
    res.send("<h3>Please Login</h3>")
})

app.get('/home', (req, res) => {
    res.send('<h5>Hello from HOME</h5>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})