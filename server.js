import app from './src/app.js'

const PORT = 3000

const routes = {
    "/": "hello world",
    "/livros": "Rota livros",
    "/autores": "Rota autores",
}

app.listen(PORT, () => {
    console.log('executing...')
});