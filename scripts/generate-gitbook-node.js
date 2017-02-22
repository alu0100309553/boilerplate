#!/usr/bin/env node

var exec = require('child_process').exec;
var repo = require('./../package.json').repository.wiki;
console.log(repo);

exec ('./node_modules/.bin/gitbook build ./txt ./gh-pages', function (error, stdout, stderr){
  console.log(stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
