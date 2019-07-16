const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/maxima', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log(msg)
    })
