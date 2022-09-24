/**
 * creating a http server using Node.js
 */
//using http module for creating server
const http = require('http');


/**
 * using http to start the server
 * => when we talk about client-server, 
 * request-response objects come into picture.
 * => pass req, res as parameter to callback function
 */
const server = http.createServer((req, res)=>{
    //prints on each client request in console
    //here browser is a client while http server is the server
    //here we are making request from browser only initially
    console.log(req.url); //print url client is making a request to
    console.log('Hello in world of client-server!!');

})

/**
 * bind the server to start
 */
server.listen(3000, ()=>{
    //each process on a system runs on a port number
    console.log('Server started on port number : 3000');
})