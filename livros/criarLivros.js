const { livros } = require("./livros")

function criarLivro(titulo, autor, isbn) {
    const novoLivro = {titulo, autor, isbn};
    livros.push(novoLivro)
    return novoLivro
}

module.exports = { criarLivro }