const express = require('express')

const route = require('./routes')

const app = express()
const port = 5000

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})