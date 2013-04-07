
/*
 * GET home page.
 */
module.exports = function (app, Models) {  
    "use strict"; 
    
    var controllers = Object.create({});
    
    
    
    
    controllers.index = function(req, res) {
        res.render('index', { title: 'Hacking HotSpots', page: 'index'});
    };
    
    
    
    
    controllers.spots = function(req, res) {
        var params = req.body || {};
        
        res.render('spots', { title: 'Hacking HotSpots - Spots', page: 'spots', params: params});
    };    
    
    
    return controllers;
};
