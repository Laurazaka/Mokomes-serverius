import http from 'http';

const server = {};

server.httpServer = http.createServer(() => {
    console.log('Skambutis i sukurta serveri...');
});

server.init = () => {
    console.log("bandau paleisti serverio procesa...");
    const port = 3000;
    server.httpServer.listen(3000, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${port}`);
    });
}

export { server }