
const cheeses = require('../data/cheeses.js');


/**
 * @module Cheeses
 */

module.exports = {
    /**
     * getAll
     * Returnerer et JSON objekt med alle oste fra kartoteket
     * @returns {Object}
     */


     
    'getAll': () =>  cheeses,

    /**
     * getOne
     * Returnerer et JSON objekt med en enkelt ost fra kartoteket
     * @param {string} varenr - varenummeret på en ost
     * @returns {Object}
     */

    'getOne': (varenr) => {
        let currenCheese = null;
        cheeses.forEach((cheese) => {
            if(cheese.varenr == varenr){
               currenCheese = JSON.stringify(cheese);
            }
            
        });
    
        if (currenCheese !== null) {
            return currenCheese;
        } else {
            return { 
                "code": "ResourceNotFound", 
                "message": varenr + " does not exist"
            
            };
        }     
    }
};