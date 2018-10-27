#!/usr/bin/env node
const program = require('commander');

program
  .command('run <dir>')
  .description('Run a program')
  .action((dir) => {
    console.log(dir);
  });


program.parse(process.argv);
