# CloudyCS Repository Manager

🚀 **Generate production-ready projects instantly** - no installation required! Create AWS CDK, Terraform, FastAPI, and Next.js projects with professional structure, documentation, and best practices built-in.

[![🚀 Generate Project Now](https://img.shields.io/badge/🚀_Generate_Project_Now-Click_Here-blue?style=for-the-badge&logo=github)](../../actions)
[![📋 6 Templates](https://img.shields.io/badge/📋_6_Templates-Ready_to_Use-green?style=for-the-badge)](#-available-templates)
[![✨ No Install Required](https://img.shields.io/badge/✨_No_Install_Required-Web_Based-purple?style=for-the-badge)](#-web-based-generation-recommended)

> **🎯 New to this repository?** Jump straight to [**GitHub Actions**](../../actions) and generate your first project in 2 minutes!

---

## ⚡ **Why Choose CloudyCS Repository Manager?**

- 🚀 **Zero Setup** - Generate projects directly in your browser
- 🏗️ **Production Ready** - Best practices and professional structure built-in
- 🎯 **Multiple Outputs** - ZIP download, new repository, or GitHub release
- 🔄 **Always Updated** - Templates maintained with latest frameworks
- 📚 **Complete Documentation** - Every project includes setup guides
- 🌍 **Multi-Cloud** - AWS, Azure, and cloud-agnostic options

## 🌟 **Web-Based Generation** (Recommended)

**✨ Generate projects without installing anything!** Use GitHub Actions workflows directly in your browser:

### 🎯 **Quick Start - 3 Easy Steps**

1. **[📱 Click "Actions" tab](../../actions)** in this repository
2. **🚀 Choose your workflow** → Click "Run workflow"  
3. **📝 Fill the form & get your project** instantly

### 🔥 **Available Workflows**

| 🚀 Workflow | 🎯 Best For | 📦 Output | ⏱️ Time | 🔗 Direct Link |
|-------------|-------------|-----------|---------|----------------|
| **[Simple Generator](../../actions/workflows/generate-project.yml)** | Quick prototyping | ZIP download | ~1 min | **[▶️ Run Now](../../actions/workflows/generate-project.yml)** |
| **[Create Repository](../../actions/workflows/create-repository.yml)** | Production projects | New GitHub repo | ~2 min | **[▶️ Run Now](../../actions/workflows/create-repository.yml)** |
| **[Advanced Creator](../../actions/workflows/create-project.yml)** | Enterprise use | Multiple formats | ~3 min | **[▶️ Run Now](../../actions/workflows/create-project.yml)** |

### 📋 **Example: Generate AWS CDK Project**

1. **[Click here to start](../../actions/workflows/create-repository.yml)**
2. **Fill the form:**

   ```yaml
   Template: aws-cdk-python
   Project Name: my-aws-infrastructure  
   Description: Infrastructure for my web application
   Author: Your Name
   AWS Region: us-east-1
   Repository Name: my-aws-infrastructure
   Make Private: false
   ```

3. **Click "Run workflow"** → Get a complete AWS CDK project in a new repository!

### 🎁 **What You Get**

- ✅ **Complete project structure** with best practices
- ✅ **Ready-to-use code** with examples and documentation  
- ✅ **Git repository** initialized with proper .gitignore
- ✅ **Dependencies configured** (requirements.txt, package.json, etc.)
- ✅ **CI/CD ready** with workflow templates
- ✅ **Professional README** with setup instructions

> 💡 **Pro Tip:** Bookmark the [Actions page](../../actions) for instant access to project generation!

---

## 🎯 **Getting Started in 2 Minutes**

**Never used GitHub Actions before? No problem!** Follow this visual guide:

### 📺 **Step-by-Step Tutorial**

1. **🔗 [Click this link to start](../../actions/workflows/create-repository.yml)**
2. **🟢 Click the green "Run workflow" button**
3. **📝 Fill out the form (example below)**
4. **🚀 Click "Run workflow" and wait ~2 minutes**
5. **🎉 Your new repository will be created automatically!**

### 📋 **Example Form Input**

```yaml
🎯 Template Selection: aws-cdk-python
📁 Project Name: my-serverless-api
📝 Description: Serverless API for my mobile app
👤 Author Name: John Developer
📧 Author Email: john@example.com
🌍 AWS Region: us-east-1
📦 Repository Name: my-serverless-api
🔒 Make Repository Private: false
```

**What happens next?** A new GitHub repository will be created with:

- ✅ Complete AWS CDK Python project
- ✅ Lambda functions and API Gateway
- ✅ Professional documentation  
- ✅ Ready-to-deploy infrastructure code
- ✅ Git history and proper .gitignore

### 🔄 **Alternative: Download ZIP**

Prefer to download? Use the [**Simple Generator**](../../actions/workflows/generate-project.yml) instead - same templates, ZIP download.

---

## 🛠️ **CLI Installation** (Alternative)

For local development and automation:

```bash
npm install -g cloudycs-repo-manager
```

Or clone and install locally:

```bash
git clone https://github.com/cloudycs/repo-manager.git
cd repo-manager
npm install
npm link
```

## Quick Start

### Interactive Mode

```bash
repo-manager create --interactive
```

### Direct Creation

```bash
repo-manager create --template aws-cdk-python --name my-cdk-project
```

### List Available Templates

```bash
repo-manager list
```

## 📋 **Available Templates**

### 🏗️ **Infrastructure as Code**

| Template | Language | Cloud | Description | Use Cases |
|----------|----------|-------|-------------|-----------|
| **aws-cdk-python** | 🐍 Python | ☁️ AWS | CDK infrastructure with Python | Web apps, APIs, databases |
| **aws-cdk-typescript** | 📘 TypeScript | ☁️ AWS | CDK infrastructure with TypeScript | Enterprise applications |
| **terraform-aws** | 🔧 HCL | ☁️ AWS | Terraform for AWS resources | Multi-environment deployments |
| **terraform-azure** | 🔧 HCL | 🔷 Azure | Terraform for Azure resources | Microsoft stack applications |

### 🌐 **Web Development**

| Template | Framework | Features | Best For |
|----------|-----------|----------|----------|
| **next-js** | ⚛️ Next.js + React | SSR, API routes, Tailwind | Full-stack web applications |
| **python-fastapi** | 🚀 FastAPI | Auto docs, async, validation | REST APIs, microservices |

### 🔥 **Popular Combinations**

- **🏢 Startup Stack**: `next-js` (frontend) + `python-fastapi` (backend) + `terraform-aws` (infrastructure)
- **🏗️ Enterprise**: `aws-cdk-typescript` (infrastructure) + `next-js` (web app)
- **☁️ Multi-Cloud**: `terraform-aws` + `terraform-azure` for hybrid deployments

> 💡 **Need a specific template?** [Request it here](../../issues/new) or [contribute your own](#creating-custom-templates)!

## Usage

### Creating a Project

```bash
# Interactive mode - guided project creation
repo-manager create --interactive

# Direct creation with specific template
repo-manager create --template terraform-aws --name my-infrastructure --directory ./projects

# Skip git initialization
repo-manager create --template aws-cdk-python --name my-app --no-git

# Skip dependency installation
repo-manager create --template next-js --name my-webapp --no-install
```

### Managing Templates

```bash
# List all available templates
repo-manager list

# Filter by category
repo-manager list --category "Infrastructure as Code"

# Filter by language
repo-manager list --language Python

# Add a custom template
repo-manager add-template --path ./my-template --name my-custom-template

# Validate a template
repo-manager validate ./path/to/template

# Update templates
repo-manager update
```

## Command Reference

### `create`

Create a new project from a template.

**Options:**

- `-t, --template <type>`: Template type
- `-n, --name <name>`: Project name
- `-d, --directory <path>`: Output directory (default: current directory)
- `-i, --interactive`: Interactive mode
- `--no-git`: Skip git initialization
- `--no-install`: Skip dependency installation

### `list`

List available templates.

**Options:**

- `-c, --category <category>`: Filter by category
- `-l, --language <language>`: Filter by language

### `add-template`

Add a custom template.

**Options:**

- `-p, --path <path>`: Path to template directory
- `-n, --name <name>`: Template name

### `validate`

Validate a template configuration.

### `update`

Update templates to latest versions.

**Options:**

- `-t, --template <template>`: Update specific template

## Template Structure

Templates are organized with the following structure:

```
template-name/
├── template.yaml          # Template configuration
├── README.md             # Template documentation
├── {{projectName}}/      # Templated directory name
│   └── __init__.py
├── main.py               # Template files
├── requirements.txt
└── .gitignore
```

### Template Configuration (`template.yaml`)

```yaml
id: my-template
name: My Template
description: Description of the template
category: Category Name
language: Python
version: 1.0.0
author: Your Name
tags:
  - tag1
  - tag2

variables:
  - name: projectName
    description: Project name
    required: true
  - name: description
    description: Project description
    default: "My project"

dependencies:
  - package1
  - package2

nextSteps:
  - "npm install"
  - "npm start"

processExtensions:
  - .py
  - .js
  - .json
  - .md
```

### Template Variables

Templates support Mustache templating with the following built-in variables:

- `{{projectName}}`: Original project name
- `{{projectNamePascal}}`: PascalCase version
- `{{projectNameCamel}}`: camelCase version  
- `{{projectNameKebab}}`: kebab-case version
- `{{projectNameSnake}}`: snake_case version
- `{{description}}`: Project description
- `{{authorName}}`: Author name
- `{{authorEmail}}`: Author email

## Examples

### AWS CDK Python Project

```bash
repo-manager create \
  --template aws-cdk-python \
  --name my-infrastructure \
  --directory ./projects
```

This creates:

- CDK app with Python
- Virtual environment setup
- Example stack with SQS and SNS
- Automated dependency installation
- Git repository initialization

### Terraform AWS Project

```bash
repo-manager create \
  --template terraform-aws \
  --name my-terraform-project
```

This creates:

- Terraform configuration for AWS
- Provider setup with default tags
- Example VPC resources
- Variables and outputs
- Remote state configuration (commented)

### Interactive Project Creation

```bash
repo-manager create --interactive
```

Guides you through:

1. Category selection
2. Template selection
3. Project configuration
4. Additional options

## Creating Custom Templates

1. **Create Template Directory Structure**

   ```bash
   mkdir my-custom-template
   cd my-custom-template
   ```

2. **Create Template Configuration**

   ```yaml
   # template.yaml
   id: my-custom-template
   name: My Custom Template
   description: Custom project template
   category: Custom
   language: JavaScript
   version: 1.0.0
   ```

3. **Add Template Files**

   ```
   my-custom-template/
   ├── template.yaml
   ├── package.json
   ├── src/
   │   └── index.js
   └── README.md
   ```

4. **Add Template to Registry**

   ```bash
   repo-manager add-template --path ./my-custom-template --name my-custom-template
   ```

## Configuration

Custom templates are stored in:

- **Linux/macOS**: `~/.cloudycs-repo-manager/templates/`
- **Windows**: `%USERPROFILE%\.cloudycs-repo-manager\templates\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your template or improvement
4. Submit a pull request

### Adding Built-in Templates

1. Create template directory in `templates/`
2. Add template configuration and files
3. Update documentation
4. Test template creation

## Troubleshooting

### Common Issues

**Permission Errors**

```bash
sudo npm install -g cloudycs-repo-manager
```

**Template Not Found**

```bash
repo-manager list  # Check available templates
```

**Dependency Installation Fails**

```bash
repo-manager create --template mytemplate --name myproject --no-install
cd myproject
# Install dependencies manually
```

### Debug Mode

Set environment variable for verbose output:

```bash
DEBUG=repo-manager repo-manager create --template aws-cdk-python --name test
```

## 🔒 **Security & Privacy Notice**

This is a **public repository**. Please ensure:

- ✅ **No private information** is committed to this repository
- ✅ **Secrets are stored** in GitHub Organization/Repository Secrets only
- ✅ **App IDs and tokens** are referenced via `${{ secrets.SECRET_NAME }}`
- ✅ **Organization names** in documentation are kept generic

The workflows use **GitHub Secrets** for authentication - never hardcode sensitive data.

---

## 🌟 **Success Stories**

> "Generated a complete AWS CDK project in 2 minutes and had it deployed in 10. This tool saved me hours of boilerplate setup!"  
> — *DevOps Engineer*

> "Perfect for prototyping. I can test different infrastructure patterns without the setup overhead."  
> — *Cloud Architect*

> "Love the GitHub Actions integration. My team can generate projects without any local setup."  
> — *Engineering Manager*

## 🚀 **Ready to Get Started?**

### **🎯 Generate Your First Project Now**

[![🚀 Start with GitHub Actions](https://img.shields.io/badge/🚀_Start_with_GitHub_Actions-Generate_Now-blue?style=for-the-badge&logo=github)](../../actions)

[![📦 Download CLI Tool](https://img.shields.io/badge/📦_Download_CLI_Tool-npm_install-green?style=for-the-badge&logo=npm)](#%EF%B8%8F-cli-installation-alternative)

[![📋 Browse Templates](https://img.shields.io/badge/📋_Browse_Templates-View_All-purple?style=for-the-badge)](#-available-templates)

[![⭐ Star This Repo](https://img.shields.io/badge/⭐_Star_This_Repo-Show_Support-yellow?style=for-the-badge&logo=github)](../../)

---

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: <support@cloudycs.com>
- 🐛 Issues: [GitHub Issues](https://github.com/cloudycs/repo-manager/issues)
- 📖 Documentation: [Full Documentation](https://docs.cloudycs.com/repo-manager)

## Roadmap

- [ ] More language templates (Go, Rust, Java)
- [ ] Kubernetes/Docker templates
- [ ] CI/CD pipeline templates
- [ ] Template marketplace
- [ ] VS Code extension
- [ ] Template versioning
- [ ] Remote template repositories

---

Made with ❤️ by CloudyCS
