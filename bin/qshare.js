#!/usr/bin/env node

'use strict';

var qshare = require('../app'),
    app = qshare(process.argv[2], process.argv[3]);
