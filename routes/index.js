/*
    Routes setup  
*/
exports.setup = function (params) {
    var app = params.app, controllers = params.controllers;

    // Generic Routes
    app.get('/', controllers.index); 
};
