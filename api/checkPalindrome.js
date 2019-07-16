//Função para checar se a palavra é palindrome
module.exports = app => {
    function checkPalindrome(word1, word2) {
        //recebe palavra 1 e checa se o inverso dela é igual ou não retornando as msgs de acordo com o resultado.
        if (word1 == word1.split('').reverse().join('')) {
            word1 = "A palavra '" + word1 + "' é palindroma. "
        } else if (word1 != word1.split('').reverse().join('')) {
            word1 = "A palavra '" + word1 + "' não é palindroma. "
        } 
        //recebe palavra 2 e checa se o inverso dela é igual ou não retornando as msgs de acordo com o resultado.
        if (word2 == word2.split('').reverse().join('')) {
            word2 = "A palavra '" + word2 + "' é palindroma."
        } else if (word2 != word2.split('').reverse().join('')) {
            word2 = "A palavra '" + word2 + "' não é palidroma."
        }
        return word1 + word2
    }
    return { checkPalindrome }
}