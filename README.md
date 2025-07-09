# CloudyCS Repository Manager

A comprehensive command-line tool for creating project structures across different programming languages and frameworks. Generate ready-to-use project templates for AWS CDK, Terraform, and more with a single command.

## Features

- 🚀 **Multi-Language Support**: Python, TypeScript, HCL (Terraform), and more
- ☁️ **Cloud-Ready Templates**: AWS CDK, Terraform (AWS/Azure), and other cloud frameworks
- 🔧 **Automated Setup**: Dependency installation, git initialization, and project configuration
- 📦 **Template System**: Extensible template system with Mustache templating
- 🎨 **Interactive Mode**: User-friendly prompts for project configuration
- 🔌 **Custom Templates**: Add your own custom project templates

## Installation

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

## Available Templates

### Infrastructure as Code

#### AWS CDK
- **aws-cdk-python**: AWS CDK project with Python
- **aws-cdk-typescript**: AWS CDK project with TypeScript

#### Terraform
- **terraform-aws**: Terraform project for AWS infrastructure
- **terraform-azure**: Terraform project for Azure infrastructure

### Web Development
- **next-js**: Next.js React application
- **vite-react**: Vite + React application
- **express-api**: Express.js REST API

### Microservices
- **python-fastapi**: FastAPI Python microservice
- **node-express**: Node.js Express microservice

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

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@cloudycs.com
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