//Controlador das Palavras

module.exports = app => {
    
    const { checkPalindrome } = app.api.checkPalindrome

    //Model Words para amazenar no Mongo
    const Words = app.mongoose.model('Words', {
        word1: String,
        word2: String,
        result: String,
        createdAt: Date
    })
    //Recebe as palavras, checa se são palindromes e armazena no BD resultado
    const process = (req, res) => {

        resultPalindrome = checkPalindrome(req.body.word1, req.body.word2)

        const word = new Words({
            word1: req.body.word1,
            word2: req.body.word2,
            result: resultPalindrome,
            createdAt: new Date()
        })

        word.save().then(() => console.log('Salvo do BD'))

        res.json(resultPalindrome)
    }
    //Retorna todas informações salvas no BD
    const get = (req, res) => {

        Words.find(function (err, words) {
            if (err) return console.error(err);
            res.json(words)
          })

    }

    return { process, get }
}   
