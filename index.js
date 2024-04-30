//using http module (inbuilt given by node) we can setup a basic server
const http = require('http');
const PORT= 3000;
/**
 * Http module contains a function called as createserver
 * this createserver function takes callback as the input
 * Now inside the callback we get two arguments
 * -> request -> this argument contains all the details about the incoming request
 * -> response -> this argument cntains functions using which we can prepare the responses
 * 
 * the createserver function returns the serve object
 */

const server = http.createServer(function exec(request, response){
    console.log(request.method);
    if(request.url == '/home')
   {
    response.end("Welcome to home");
   }
   else if(request.url == '/faq')
   {
    response.end("List of FAQs");
   }
   else
   {
    response.end("Hello world");
   }
});
server.listen(PORT, function process()
{
    //once the server started then this callback executes
    console.log("Server started on port",PORT);
});