/*jslint
    node: true
*/
(function () {
    'use strict';

    function qshare(port, folder) {
        var express = require('express'),
            morgan = require('morgan'),
            path = require('path'),
            serveIndex = require('serve-index'),
            serveStatic = require('serve-static'),
            dir,
            app = express();

        port = port || 1337;
        folder = folder || '.';
        dir = folder.charAt(0) === '/' ? folder :
                                       path.resolve(process.cwd(), folder);

        app.use(morgan('common'));
        app.use('/', serveIndex(dir, {'icons': true}));
        app.use('/', serveStatic(dir));
        app.listen(port, function () {
            console.log('Sharing server @ port ' + port);
        });

        return app;
    }

    module.exports = qshare;
}());
