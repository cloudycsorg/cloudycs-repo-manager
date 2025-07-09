const chalk = require('chalk');
const { TemplateRegistry } = require('../core/template-registry');

async function addTemplate(options) {
  try {
    if (!options.path || !options.name) {
      console.error(chalk.red('❌ Both --path and --name are required'));
      process.exit(1);
    }

    const registry = new TemplateRegistry();
    const templatePath = await registry.addCustomTemplate(options.path, options.name);
    
    console.log(chalk.green(`✅ Template "${options.name}" added successfully`));
    console.log(chalk.gray(`Location: ${templatePath}`));
    
  } catch (error) {
    console.error(chalk.red('❌ Error adding template:'), error.message);
    process.exit(1);
  }
}

module.exports = { addTemplate };
