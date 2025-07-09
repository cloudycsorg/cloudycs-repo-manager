const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');

class TemplateRegistry {
  constructor() {
    this.templatesDir = path.join(__dirname, '../../templates');
    this.customTemplatesDir = path.join(process.env.HOME || process.env.USERPROFILE, '.cloudycs-repo-manager', 'templates');
  }

  async getAvailableTemplates() {
    const templates = [];

    // Load built-in templates
    if (await fs.pathExists(this.templatesDir)) {
      const builtInTemplates = await this.loadTemplatesFromDirectory(this.templatesDir);
      templates.push(...builtInTemplates);
    }

    // Load custom templates
    if (await fs.pathExists(this.customTemplatesDir)) {
      const customTemplates = await this.loadTemplatesFromDirectory(this.customTemplatesDir);
      templates.push(...customTemplates.map(t => ({ ...t, custom: true })));
    }

    return templates.sort((a, b) => {
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return a.name.localeCompare(b.name);
    });
  }

  async loadTemplatesFromDirectory(directory) {
    const templates = [];
    const items = await fs.readdir(directory);

    for (const item of items) {
      const itemPath = path.join(directory, item);
      const stats = await fs.stat(itemPath);

      if (stats.isDirectory()) {
        const configPath = path.join(itemPath, 'template.yaml');
        if (await fs.pathExists(configPath)) {
          try {
            const config = await this.loadTemplateConfig(configPath);
            templates.push({
              ...config,
              path: itemPath
            });
          } catch (error) {
            console.warn(`Warning: Invalid template configuration in ${item}: ${error.message}`);
          }
        }
      }
    }

    return templates;
  }

  async loadTemplateConfig(configPath) {
    const content = await fs.readFile(configPath, 'utf8');
    return yaml.parse(content);
  }

  async addCustomTemplate(sourcePath, name) {
    await fs.ensureDir(this.customTemplatesDir);
    const targetPath = path.join(this.customTemplatesDir, name);
    
    if (await fs.pathExists(targetPath)) {
      throw new Error(`Custom template "${name}" already exists`);
    }

    await fs.copy(sourcePath, targetPath);
    return targetPath;
  }

  async removeCustomTemplate(name) {
    const templatePath = path.join(this.customTemplatesDir, name);
    
    if (!await fs.pathExists(templatePath)) {
      throw new Error(`Custom template "${name}" not found`);
    }

    await fs.remove(templatePath);
  }

  async getTemplate(templateId) {
    const templates = await this.getAvailableTemplates();
    return templates.find(t => t.id === templateId);
  }
}

module.exports = { TemplateRegistry };
