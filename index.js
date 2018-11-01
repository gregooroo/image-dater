#!/usr/bin/env node
const program = require('commander');
const imageDater = require('./lib');

program
  .command('run <dir>')
  .description('Run a program')
  .action(dir => imageDater(dir));


program.parse(process.argv);
