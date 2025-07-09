const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const { execSync } = require('child_process');
const { TemplateEngine } = require('../core/template-engine');
const { TemplateRegistry } = require('../core/template-registry');
const { GitManager } = require('../utils/git-manager');
const { PackageManager } = require('../utils/package-manager');

async function createProject(options) {
  try {
    console.log(chalk.blue.bold('\n🚀 CloudyCS Repository Manager\n'));

    const registry = new TemplateRegistry();
    const templates = await registry.getAvailableTemplates();

    let template, projectName, outputDir;

    if (options.interactive || !options.template || !options.name) {
      const answers = await promptForOptions(templates, options);
      template = answers.template;
      projectName = answers.projectName;
      outputDir = answers.outputDir;
    } else {
      template = options.template;
      projectName = options.name;
      outputDir = options.directory;
    }

    // Validate template exists
    if (!templates.find(t => t.id === template)) {
      console.error(chalk.red(`❌ Template "${template}" not found.`));
      console.log(chalk.yellow('Available templates:'));
      templates.forEach(t => console.log(`  - ${t.id}: ${t.description}`));
      process.exit(1);
    }

    const projectPath = path.join(outputDir, projectName);

    // Check if directory already exists
    if (await fs.pathExists(projectPath)) {
      const { overwrite } = await inquirer.prompt([{
        type: 'confirm',
        name: 'overwrite',
        message: `Directory "${projectName}" already exists. Overwrite?`,
        default: false
      }]);

      if (!overwrite) {
        console.log(chalk.yellow('Operation cancelled.'));
        return;
      }

      await fs.remove(projectPath);
    }

    const spinner = ora('Creating project structure...').start();

    try {
      // Create project from template
      const templateEngine = new TemplateEngine();
      await templateEngine.generateProject(template, projectPath, {
        projectName,
        ...options
      });

      spinner.succeed('Project structure created');

      // Initialize git repository
      if (options.git !== false) {
        const gitSpinner = ora('Initializing git repository...').start();
        try {
          const gitManager = new GitManager();
          await gitManager.initRepository(projectPath);
          gitSpinner.succeed('Git repository initialized');
        } catch (error) {
          gitSpinner.warn('Git initialization failed (optional)');
        }
      }

      // Install dependencies
      if (options.install !== false) {
        const installSpinner = ora('Installing dependencies...').start();
        try {
          const packageManager = new PackageManager();
          await packageManager.installDependencies(projectPath, template);
          installSpinner.succeed('Dependencies installed');
        } catch (error) {
          installSpinner.warn('Dependency installation failed (optional)');
        }
      }

      console.log(chalk.green.bold('\n✅ Project created successfully!\n'));
      console.log(chalk.cyan('Next steps:'));
      console.log(chalk.white(`  cd ${projectName}`));
      
      const templateInfo = templates.find(t => t.id === template);
      if (templateInfo && templateInfo.nextSteps) {
        templateInfo.nextSteps.forEach(step => {
          console.log(chalk.white(`  ${step}`));
        });
      }

    } catch (error) {
      spinner.fail('Failed to create project');
      throw error;
    }

  } catch (error) {
    console.error(chalk.red('\n❌ Error creating project:'), error.message);
    process.exit(1);
  }
}

async function promptForOptions(templates, options) {
  const questions = [];

  if (!options.template) {
    const categories = [...new Set(templates.map(t => t.category))];
    
    questions.push({
      type: 'list',
      name: 'category',
      message: 'Select a category:',
      choices: categories
    });

    questions.push({
      type: 'list',
      name: 'template',
      message: 'Select a template:',
      choices: (answers) => {
        return templates
          .filter(t => t.category === answers.category)
          .map(t => ({
            name: `${t.name} - ${t.description}`,
            value: t.id
          }));
      }
    });
  }

  if (!options.name) {
    questions.push({
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      validate: (input) => {
        if (!input.trim()) return 'Project name is required';
        if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
          return 'Project name can only contain letters, numbers, hyphens, and underscores';
        }
        return true;
      }
    });
  }

  if (!options.directory) {
    questions.push({
      type: 'input',
      name: 'outputDir',
      message: 'Output directory:',
      default: process.cwd()
    });
  }

  const answers = await inquirer.prompt(questions);
  
  return {
    template: options.template || answers.template,
    projectName: options.name || answers.projectName,
    outputDir: options.directory || answers.outputDir
  };
}

module.exports = { createProject };
