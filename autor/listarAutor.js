const { autores } = require("./autores")

function listarAutores() {
    autores.forEach(lista => {
        console.log(lista)
    });
}

module.exports = { listarAutores }