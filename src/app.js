import express from 'express'
import connectDb from './config/dbConnect.js'

const app = express()
app.use(express.json())

const dbConnection = await connectDb()
dbConnection.on('error', (err) => {
    console.error('Erro ao conectar no MongoDB', err)
})

dbConnection.once("open", () => {
    console.log("Conectado no MongoDB")
})

const livros = [
    {
        id: 1,
        title: "The lord of the rings"
    },
    {
        id: 2,
        title: "Game of thrones"
    }
]

const searchBook = (id) => {
    return livros.findIndex((book) => {
        return book.id === Number(id)
    })
}

app.get('/', (req, res) => {
    res.status(200).json('Node and express')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    const index = searchBook(req.params.id) 
    res.status(200).json(livros[index])
})

app.put('/livros/:id', (req, res) => {
    const index = searchBook(req.params.id)
    livros[index].title = req.body.title
    res.status(200).json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    const index = searchBook(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("The book has been deleted")
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json(livros)
})

export default app;