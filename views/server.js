const express = require('express')
//const api = require('../public/js/api')

const server = express()

server.use(express.static('public'))
server.use('/css', express.static(__dirname + 'public/css'))
server.use('/img', express.static(__dirname + 'public/img'))
server.use('/js', express.static(__dirname + 'public/js'))

server.set('views', './views')
server.set('view engine', 'ejs')

server.get('/', (req, res) => res.render('index', { page: 'index' }))
server.get('/series', (req, res) => res.render('index', { page: 'series' }))

server.listen(3000, () => {
  console.log('Running at localhost:3000')
})
