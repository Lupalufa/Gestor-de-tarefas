const { livros } = require("./livros")

function listarLivros() {
    livros.forEach(listas => {
        console.log(listas)
    });
}

module.exports = { listarLivros }