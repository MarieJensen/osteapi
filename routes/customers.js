module.exports = (server) =>{
    server.get('/customers', function (req, res, next) { // Et route, vi bruger GET metoden. Indeholder to parametre et route og et callback(req og res).
        res.send({"kundenr": "3456","navn": "Marie Jensen"});// response sender noget data. send udskriver det i browseren. req er det data jeg beder om, det er det inden i ({}) . 
        return next();
       });
    };