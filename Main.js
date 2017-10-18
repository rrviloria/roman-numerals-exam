var http = require('http');
var simple = require('./controllers/SimpleRoman.js');
var compact = require('./controllers/CompactRoman.js');
var arabic = require('./controllers/RomanToArabic.js');


var routes = {
    '/simple': simple.main,
    '/compact': compact.main,
    '/arabic': arabic.main
};

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var fn = routes[req.url]
    if(fn != undefined)
        res = fn(req, res);
}).listen(8080);