const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, ()=>{
  console.log('server on')
})

app.use( '/', express.static( path.join(__dirname, 'public') ))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})