#!/usr/bin/env bun

import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('git-ai-commit')
  .description('AI-powered commit message generator')
  .version('1.0.0');

program
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log(chalk.green('Hello World!'));
    console.log(chalk.grey('This is styled text!'));
  });

program.parse(process.argv);
