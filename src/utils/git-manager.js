const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

class GitManager {
  async initRepository(projectPath) {
    const cwd = projectPath;
    
    // Initialize git repository
    execSync('git init', { cwd, stdio: 'inherit' });
    
    // Create .gitignore if it doesn't exist
    const gitignorePath = path.join(projectPath, '.gitignore');
    if (!await fs.pathExists(gitignorePath)) {
      await this.createGitignore(gitignorePath);
    }
    
    // Initial commit
    execSync('git add .', { cwd, stdio: 'inherit' });
    execSync('git commit -m "Initial commit"', { cwd, stdio: 'inherit' });
  }

  async createGitignore(gitignorePath) {
    const defaultGitignore = `# Dependencies
node_modules/
__pycache__/
*.pyc
.venv/
venv/

# Build outputs
dist/
build/
*.js.map
*.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Environment
.env
.env.local
.env.production

# Terraform
*.tfstate
*.tfstate.*
.terraform/
.terraform.lock.hcl

# CDK
cdk.out/
*.js
*.d.ts
node_modules

# Coverage
coverage/
*.lcov
`;
    
    await fs.writeFile(gitignorePath, defaultGitignore);
  }
}

module.exports = { GitManager };
