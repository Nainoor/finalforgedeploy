/// <reference path='./typings/node/node.d.ts' />
/// <reference path='./typings/express/express.d.ts' />
var favicon = require('serve-favicon');
var express = require('express');
var api = require('./routes/api');
var app = express();
app.use(favicon(__dirname + '/www/img/favicon.png'));
app.use('/node/typeview', express.static(__dirname + '/www'));
app.use('/node/typeview/api', api);
var port = process.env.PORT || 3000;
app.set('port', port);
var server = app.listen(port, function () {
    console.log('Server is running on port ' + port);
});

//# sourceMappingURL=server.js.map
