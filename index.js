#!/usr/bin/env node
const program = require('commander');
const imageDater = require('./lib');

program
  .command('run <dir>')
  .description('Run a program')
  .action((dir) => {
    imageDater(dir)
      .then(result => console.log(result))
      .catch(err => console.error(err));
  });


program.parse(process.argv);
