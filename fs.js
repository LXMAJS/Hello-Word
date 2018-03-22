'use strict'

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: '+ root);

var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;

    var filepath = path.join(root, pathname);

    fs.stat(filepath, function(err, stats){
        if(!err && stats.isFile()){
            console.log('200 '+ request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            // try finding read.md util unfound
            
            var filepath = path.join(root, 'read.md');
            fs.stat

            console.log('404 '+ request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running');