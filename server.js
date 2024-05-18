import http from 'http'

const port = 3000

const routes = {
    "/": "hello world",
    "/livros": "Rota livros",
    "/autores": "Rota autores",
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        // 'accept': 'text/plan'
        'Content-Type': 'application/json'
    });

    
    res.end(JSON.stringify(routes[req.url]));
    // res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log('executing...')
});