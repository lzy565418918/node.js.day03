const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('好啊')
})

app.listen(3001, () => console.log('success'))