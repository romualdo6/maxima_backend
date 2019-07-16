const app = require('express')()
const consign = require('consign')
const mongoose = require('mongoose')

require('./config/mongodb')

app.mongoose = mongoose

consign()
    .include('./config/middlewares.js')
    .then('./api/checkPalindrome.js')
    .then('./api/wordsModel')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(4000, () => {
    console.log('Backend executando...')
})