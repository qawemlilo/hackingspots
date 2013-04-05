
/**
 * Module dependencies.
 */

var express = require('express'), 
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    Models = require('./models'),
    Controllers = require('./controllers')(Models); // controllers need to eat up models

var app = express();



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));




// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



/**************************************************
   Routes need to interact with Controllers   
**************************************************/

routes.setup({
    'controllers': Controllers,
    'app': app
});




http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
