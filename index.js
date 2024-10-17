const prompt = require("prompt-sync")();

const { criarAutor } = require("./autor/criarAutor")
const { criarLivro } = require("./livros/criarLivros")
const { listarAutores } = require("./autor/listarAutor")
const { listarLivros } = require("./livros/listarLivros")



const autor1 = criarAutor("Pedro Lucas", "pedrolucas@gmail.com")
criarLivro("Livro De fulano",autor1,"47")

const autor2 = criarAutor("João", "pedrolucas@gmail.com")
const autor3 = criarAutor("Carlos", "pedrolucas@gmail.com")
const autor4 = criarAutor("Renata", "pedrolucas@gmail.com")
const autor5 = criarAutor("Vitor", "pedrolucas@gmail.com")

listarAutores()
listarLivros()
