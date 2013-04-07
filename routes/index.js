/*
    Routes setup  
*/
exports.setup = function (params) {
    "use strict";
    
    var app = params.app, controllers = params.controllers;

    
    app.get('/', controllers.index);
    app.post('/spots', controllers.spots);  
};
