
/*
 * GET home page.
 */
module.exports = function (app, Models) {  
    "use strict"; 
    
    var controllers = Object.create({});
    
    
    controllers.index = function(req, res) {
        res.render('index', { title: 'Hacking HotSpots', page: 'index'});
    };
    
    
    return controllers;
};