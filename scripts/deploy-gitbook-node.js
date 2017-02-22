#!/usr/bin/env node
var repo = require('./../package.json').repository.url;

require('gh-pages').publish('./gh-pages',{repo: repo, logger: function(m) { console.error(m); }});
