const chalk = require('chalk');
const { TemplateEngine } = require('../core/template-engine');

async function validateTemplate(templatePath) {
  try {
    const templateEngine = new TemplateEngine();
    const result = await templateEngine.validateTemplate(templatePath);
    
    if (result.valid) {
      console.log(chalk.green('✅ Template is valid'));
      console.log(chalk.cyan('Template Details:'));
      console.log(`  ID: ${result.config.id}`);
      console.log(`  Name: ${result.config.name}`);
      console.log(`  Description: ${result.config.description}`);
      console.log(`  Category: ${result.config.category}`);
      console.log(`  Language: ${result.config.language}`);
    } else {
      console.log(chalk.red('❌ Template validation failed'));
      console.log(chalk.yellow('Errors:'));
      result.errors.forEach(error => {
        console.log(chalk.red(`  - ${error}`));
      });
      process.exit(1);
    }
    
  } catch (error) {
    console.error(chalk.red('❌ Error validating template:'), error.message);
    process.exit(1);
  }
}

module.exports = { validateTemplate };
