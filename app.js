/*jslint
    node: true
*/
(function () {
    'use strict';

    function qshare(port, folder) {
        var express = require('express'),
            path = require('path'),
            serveIndex = require('serve-index'),
            serveStatic = require('serve-static'),
            dir,
            app = express();


        port = port || 1337;
        dir = folder.charAt(0) === '/' ? folder :
                                       path.resolve(process.cwd(), folder);
        app.use('/', serveIndex(dir, {'icons': true}));
        app.use('/', serveStatic(dir));
        app.listen(port, function () {
            console.log('Sharing server @ port ' + port);
        });

        return app;
    }

    module.exports = qshare;
}());
