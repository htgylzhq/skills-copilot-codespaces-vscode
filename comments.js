// Create web server
// 1. Import http module
var http = require('http');

// 2. Create server
var server = http.createServer(function(req, res) {
    // 3. Set up response headers
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // 4. Send response
    res.end('Hello World\n');
});

// 5. Listen on port 3000
server.listen(3000, 'localhost');

// 6. Log message
console.log('Server running at http://localhost:3000/');