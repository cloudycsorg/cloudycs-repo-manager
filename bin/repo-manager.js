#!/usr/bin/env node

const { program } = require('commander');
const { createProject } = require('../src/commands/create');
const { listTemplates } = require('../src/commands/list');
const { addTemplate } = require('../src/commands/add-template');
const { updateTemplate } = require('../src/commands/update');
const { validateTemplate } = require('../src/commands/validate');
const { version } = require('../package.json');

program
  .name('repo-manager')
  .description('CloudyCS Repository Manager - Create project structures for different languages and frameworks')
  .version(version);

program
  .command('create')
  .description('Create a new project from a template')
  .option('-t, --template <type>', 'Template type (e.g., aws-cdk-python, terraform-aws)')
  .option('-n, --name <name>', 'Project name')
  .option('-d, --directory <path>', 'Output directory', process.cwd())
  .option('-i, --interactive', 'Interactive mode')
  .option('--no-git', 'Skip git initialization')
  .option('--no-install', 'Skip dependency installation')
  .action(createProject);

program
  .command('list')
  .description('List available templates')
  .option('-c, --category <category>', 'Filter by category')
  .option('-l, --language <language>', 'Filter by language')
  .action(listTemplates);

program
  .command('add-template')
  .description('Add a new custom template')
  .option('-p, --path <path>', 'Path to template directory')
  .option('-n, --name <name>', 'Template name')
  .action(addTemplate);

program
  .command('update')
  .description('Update templates to latest versions')
  .option('-t, --template <template>', 'Update specific template')
  .action(updateTemplate);

program
  .command('validate')
  .description('Validate a template configuration')
  .argument('<template-path>', 'Path to template directory')
  .action(validateTemplate);

program.parse();
