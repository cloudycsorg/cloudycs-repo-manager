const chalk = require('chalk');
const { TemplateRegistry } = require('../core/template-registry');

async function listTemplates(options) {
  try {
    const registry = new TemplateRegistry();
    const templates = await registry.getAvailableTemplates();

    let filteredTemplates = templates;

    // Apply filters
    if (options.category) {
      filteredTemplates = filteredTemplates.filter(t => 
        t.category.toLowerCase().includes(options.category.toLowerCase())
      );
    }

    if (options.language) {
      filteredTemplates = filteredTemplates.filter(t => 
        t.language.toLowerCase().includes(options.language.toLowerCase())
      );
    }

    if (filteredTemplates.length === 0) {
      console.log(chalk.yellow('No templates found matching your criteria.'));
      return;
    }

    console.log(chalk.blue.bold('\n📋 Available Templates\n'));

    // Group by category
    const groupedTemplates = filteredTemplates.reduce((acc, template) => {
      if (!acc[template.category]) {
        acc[template.category] = [];
      }
      acc[template.category].push(template);
      return acc;
    }, {});

    Object.entries(groupedTemplates).forEach(([category, categoryTemplates]) => {
      console.log(chalk.cyan.bold(`${category}:`));
      categoryTemplates.forEach(template => {
        console.log(chalk.white(`  ${template.id}`));
        console.log(chalk.gray(`    ${template.description}`));
        console.log(chalk.gray(`    Language: ${template.language}`));
        if (template.tags && template.tags.length > 0) {
          console.log(chalk.gray(`    Tags: ${template.tags.join(', ')}`));
        }
        console.log();
      });
    });

    console.log(chalk.green(`Total: ${filteredTemplates.length} template(s) found`));

  } catch (error) {
    console.error(chalk.red('❌ Error listing templates:'), error.message);
    process.exit(1);
  }
}

module.exports = { listTemplates };
