const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

class PackageManager {
  async installDependencies(projectPath, templateId) {
    const cwd = projectPath;
    
    try {
      // Check for different package managers and install accordingly
      if (await fs.pathExists(path.join(projectPath, 'package.json'))) {
        await this.installNodeDependencies(cwd);
      }
      
      if (await fs.pathExists(path.join(projectPath, 'requirements.txt'))) {
        await this.installPythonDependencies(cwd);
      }
      
      if (await fs.pathExists(path.join(projectPath, 'Pipfile'))) {
        await this.installPipenvDependencies(cwd);
      }

      if (templateId.includes('terraform')) {
        await this.initTerraform(cwd);
      }

    } catch (error) {
      console.warn(`Warning: Failed to install dependencies: ${error.message}`);
    }
  }

  async installNodeDependencies(cwd) {
    // Check if npm, yarn, or pnpm is available
    if (this.commandExists('npm')) {
      execSync('npm install', { cwd, stdio: 'inherit' });
    } else {
      throw new Error('npm not found');
    }
  }

  async installPythonDependencies(cwd) {
    // Try to create virtual environment and install
    try {
      execSync('python -m venv .venv', { cwd, stdio: 'inherit' });
      
      // Install requirements
      const activateCmd = process.platform === 'win32' 
        ? '.venv\\Scripts\\activate && pip install -r requirements.txt'
        : 'source .venv/bin/activate && pip install -r requirements.txt';
      
      execSync(activateCmd, { cwd, stdio: 'inherit', shell: true });
    } catch (error) {
      // Fallback to global pip
      execSync('pip install -r requirements.txt', { cwd, stdio: 'inherit' });
    }
  }

  async installPipenvDependencies(cwd) {
    if (this.commandExists('pipenv')) {
      execSync('pipenv install --dev', { cwd, stdio: 'inherit' });
    } else {
      throw new Error('pipenv not found');
    }
  }

  async initTerraform(cwd) {
    if (this.commandExists('terraform')) {
      execSync('terraform init', { cwd, stdio: 'inherit' });
    } else {
      console.warn('Terraform CLI not found. Please install Terraform and run "terraform init" manually.');
    }
  }

  commandExists(command) {
    try {
      execSync(`which ${command}`, { stdio: 'ignore' });
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = { PackageManager };
