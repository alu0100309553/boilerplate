#!/usr/bin/env node

var path = require ('path');
var fs = require ('fs');
var exec = require('child_process').exec;
var cmdline = process.argv;
var file = path.win32.basename(cmdline[1]);
var dir = path.dirname(cmdline[1]);

function usage () {
  console.log("entro");
  fs.readdir(dir, function (err, files){
    files.forEach(function (currentValue, index, array){
      console.log(currentValue);
    });
  });
}

function main (){
  if (cmdline.length < 3){
    usage();
  } else {
    fs.readdir(dir, function (err, files){
      if (files.indexOf(cmdline[2])>=0){
        exec (dir + "/" + cmdline[2], function (error, stdout, stderr){
          console.log(stdout);
          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });
      } else {
        usage();
      }
    });
  }
}

main();
