const restify = require('restify');//inlæser restify 

const server = restify.createServer({// laver en server i en konstant
 name: 'osteapi',
 version: '1.0.0'
});

server.use(restify.plugins.bodyParser());

require('./routes/index')(server);


server.listen(3000, function () { // Serveren lytter til en port, her er det port 3000.
 console.log('%s listening at %s', server.name, server.url);
});