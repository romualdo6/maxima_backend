//Rotas da aplicação
module.exports = app => {
    app.route('/words')
        .post(app.api.words.process)
        .get(app.api.words.get)

}
