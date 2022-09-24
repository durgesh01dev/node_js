/**
 * Returning different response based on different request url from the client
 */
//1. include http module to work with server
const http = require('http');

//2. creating server
const server = http.createServer((req, res) => {
    //request url is hello
    if(req.url == '/hello'){
        res.end('Hello from server');
    }else if(req.url == '/welcome'){
        res.end('Welcome from server');
    }else{
        //setting internal server error 500
        res.writeHead(500);
        res.end('Invalid request, server does not know what to do!!');
    }
})

//3. start server on port 3000
server.listen(3000, ()=>{
    console.log('Server started on port number 3000');
})