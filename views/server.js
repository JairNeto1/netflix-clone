const express = require('express')

const server = express()

//server.set('views', path.join(__dirname, 'views'))

server.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

server.get('/sobre', function (req, res) {
  res.sendFile(__dirname + '/sobre.html')
})

server.listen(3000, () => {
  console.log('Rodando')
})
