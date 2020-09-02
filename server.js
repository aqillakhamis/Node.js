/* server.js file */

const http = require('http'); //import node.js core module

const hostname = '127.0.0.1';  
const port = 3000; 

const server = http.createServer(function(req,res){ //creating server 
	//handle incoming request here.. 
	res.statusCode = 200; 
	res.setHeader('Content-Type', 'text/plain'); 
	res.end('Nurulaqilla Webpage - Testing\n');
}); 

server.listen(port, hostname, function(){ //listen for any incoming request
	console.log('Server is running at http://' + hostname + ':' + port + '/'); 

}); 