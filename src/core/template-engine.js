const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');
const Mustache = require('mustache');
const chalk = require('chalk');
const { pascalCase, camelCase, kebabCase, snakeCase } = require('../utils/string-helpers');

class TemplateEngine {
  constructor() {
    this.templatesDir = path.join(__dirname, '../../templates');
  }

  async generateProject(templateId, outputPath, variables) {
    const templatePath = path.join(this.templatesDir, templateId);
    
    if (!await fs.pathExists(templatePath)) {
      throw new Error(`Template "${templateId}" not found at ${templatePath}`);
    }

    // Load template configuration
    const configPath = path.join(templatePath, 'template.yaml');
    const config = await this.loadTemplateConfig(configPath);

    // Ensure output directory exists
    await fs.ensureDir(outputPath);

    // Process template files
    await this.processTemplateDirectory(templatePath, outputPath, variables, config, '', '');
  }

  async loadTemplateConfig(configPath) {
    if (!await fs.pathExists(configPath)) {
      throw new Error(`Template configuration not found: ${configPath}`);
    }

    const configContent = await fs.readFile(configPath, 'utf8');
    return yaml.parse(configContent);
  }

  async processTemplateDirectory(templatePath, outputPath, variables, config, templateRelativePath = '', outputRelativePath = '') {
    const templateDir = path.join(templatePath, templateRelativePath);
    const outputDir = path.join(outputPath, outputRelativePath);

    const items = await fs.readdir(templateDir);

    for (const item of items) {
      // Skip template configuration file and hidden directories
      if (item === 'template.yaml' || item.startsWith('.template')) {
        continue;
      }

      const itemPath = path.join(templateDir, item);
      const stats = await fs.stat(itemPath);

      if (stats.isDirectory()) {
        // Process directory name template
        let processedDirName = item;
        if (item.includes('{{')) {
          const enhancedVariables = {
            ...variables,
            ...(variables.projectName && {
              projectNamePascal: pascalCase(variables.projectName),
              projectNameCamel: camelCase(variables.projectName),
              projectNameKebab: kebabCase(variables.projectName),
              projectNameSnake: snakeCase(variables.projectName)
            })
          };
          processedDirName = Mustache.render(item, enhancedVariables);
        }

        await fs.ensureDir(path.join(outputDir, processedDirName));
        await this.processTemplateDirectory(
          templatePath, 
          outputPath, 
          variables, 
          config, 
          path.join(templateRelativePath, item), // template path keeps original names
          path.join(outputRelativePath, processedDirName) // output path uses processed names
        );
      } else {
        await this.processTemplateFile(
          itemPath,
          path.join(outputDir, item),
          variables,
          config
        );
      }
    }
  }

  async processTemplateFile(templateFilePath, outputFilePath, variables, config) {
    let content = await fs.readFile(templateFilePath, 'utf8');
    
    // Check if file should be processed as template
    const fileExtension = path.extname(templateFilePath);
    const shouldProcess = config.processExtensions ? 
      config.processExtensions.includes(fileExtension) : 
      ['.js', '.ts', '.py', '.tf', '.tfvars', '.yaml', '.yml', '.json', '.md', '.txt'].includes(fileExtension);

    if (shouldProcess) {
      // Enhance variables with helper functions
      const enhancedVariables = {
        ...variables,
        // Add string transformation helpers for projectName
        ...(variables.projectName && {
          projectNamePascal: pascalCase(variables.projectName),
          projectNameCamel: camelCase(variables.projectName),
          projectNameKebab: kebabCase(variables.projectName),
          projectNameSnake: snakeCase(variables.projectName)
        })
      };

      // Process with Mustache templating
      content = Mustache.render(content, enhancedVariables);
    }

    // Handle filename templating
    let finalOutputPath = outputFilePath;
    if (path.basename(outputFilePath).includes('{{')) {
      const enhancedVariables = {
        ...variables,
        ...(variables.projectName && {
          projectNamePascal: pascalCase(variables.projectName),
          projectNameCamel: camelCase(variables.projectName),
          projectNameKebab: kebabCase(variables.projectName),
          projectNameSnake: snakeCase(variables.projectName)
        })
      };
      const filename = Mustache.render(path.basename(outputFilePath), enhancedVariables);
      finalOutputPath = path.join(path.dirname(outputFilePath), filename);
    }

    await fs.writeFile(finalOutputPath, content);
  }

  async validateTemplate(templatePath) {
    const configPath = path.join(templatePath, 'template.yaml');
    
    if (!await fs.pathExists(configPath)) {
      return { valid: false, errors: ['Missing template.yaml configuration file'] };
    }

    try {
      const config = await this.loadTemplateConfig(configPath);
      const errors = [];

      // Validate required fields
      if (!config.id) errors.push('Missing required field: id');
      if (!config.name) errors.push('Missing required field: name');
      if (!config.description) errors.push('Missing required field: description');
      if (!config.category) errors.push('Missing required field: category');
      if (!config.language) errors.push('Missing required field: language');

      return { valid: errors.length === 0, errors, config };
    } catch (error) {
      return { valid: false, errors: [`Invalid YAML configuration: ${error.message}`] };
    }
  }
}

module.exports = { TemplateEngine };
