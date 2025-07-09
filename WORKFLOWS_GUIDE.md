# 🔄 GitHub Actions Workflows Guide

This repository includes powerful GitHub Actions workflows that allow you to generate projects directly from the GitHub web interface without installing anything locally.

## 🚀 Available Workflows

### 1. **Simple Project Generator** (generate-project.yml)
- ✅ **Best for**: Quick project generation and download
- ✅ **Output**: Downloadable ZIP file with your project
- ✅ **No permissions needed**: Works with standard GitHub access

### 2. **Create & Deploy Project Repository** (create-repository.yml)  
- ✅ **Best for**: Creating new repositories with generated projects
- ✅ **Output**: New GitHub repository with your project already committed
- ✅ **Requires**: Repository creation permissions

### 3. **Advanced Project Creator** (create-project.yml)
- ✅ **Best for**: Full customization with releases and artifacts
- ✅ **Output**: Multiple download options and detailed project info
- ✅ **Features**: Release creation, comprehensive metadata

## 🎯 How to Use

### Step 1: Navigate to Actions Tab
1. Go to the **Actions** tab in this repository
2. Look for the workflow you want to use
3. Click **Run workflow**

### Step 2: Fill in Project Details
- **Template**: Choose from available templates (AWS CDK, Terraform, FastAPI, etc.)
- **Project Name**: Your project name (e.g., `my-awesome-app`)
- **Description**: Brief description of your project
- **Author Details**: Your name and email
- **Additional Options**: Based on selected template

### Step 3: Run and Download
- Click **Run workflow** to start generation
- Wait for completion (usually 1-2 minutes)
- Download your generated project

## 📋 Workflow Comparison

| Feature | Simple Generator | Create Repository | Advanced Creator |
|---------|-----------------|-------------------|------------------|
| Generate Project | ✅ | ✅ | ✅ |
| Download ZIP | ✅ | ✅ | ✅ |
| Create New Repo | ❌ | ✅ | ✅ |
| Auto Push Code | ❌ | ✅ | ✅ |
| Release Creation | ❌ | ❌ | ✅ |
| Detailed Metadata | ✅ | ✅ | ✅ |
| Run Time | ~1 min | ~2 min | ~3 min |

## 🎨 Template Options

All workflows support these templates:

### Infrastructure as Code
- **aws-cdk-python** - AWS CDK with Python
- **aws-cdk-typescript** - AWS CDK with TypeScript  
- **terraform-aws** - Terraform for AWS
- **terraform-azure** - Terraform for Azure

### Application Development
- **python-fastapi** - FastAPI REST API microservice
- **next-js** - Next.js React application

## 🔧 Workflow Input Examples

### AWS CDK Python Project
```
Template: aws-cdk-python
Project Name: my-infrastructure
Description: AWS infrastructure for my application
Author: John Doe
AWS Region: us-west-2
Environment: production
```

### FastAPI Microservice
```
Template: python-fastapi
Project Name: user-service-api
Description: User management microservice
Author: Jane Smith
```

### Terraform AWS Infrastructure
```
Template: terraform-aws
Project Name: aws-vpc-setup
Description: VPC and networking setup for AWS
Author: DevOps Team
AWS Region: eu-west-1
Environment: staging
```

## 📥 How to Download Generated Projects

### Method 1: Artifacts (All Workflows)
1. Go to **Actions** tab
2. Click on your workflow run
3. Scroll down to **Artifacts** section
4. Click to download ZIP file

### Method 2: New Repository (Repository Workflows)
1. Check your GitHub repositories
2. Find the newly created repository
3. Clone with: `git clone <repository-url>`

### Method 3: Releases (Advanced Workflow)
1. Go to **Releases** section of this repository
2. Find your generated project release
3. Download attached assets

## 🚀 Generated Project Structure

Each generated project includes:

```
my-project/
├── README.md              # Comprehensive documentation
├── GENERATION_INFO.md     # Generation metadata and quick start
├── .gitignore            # Appropriate ignore rules
├── package.json          # Dependencies (if applicable)
├── requirements.txt      # Python dependencies (if applicable)
├── main application files
└── template-specific files
```

## 🎯 Quick Start Examples

### For AWS CDK Projects
```bash
# Extract downloaded project
unzip my-infrastructure-aws-cdk-python.zip
cd my-infrastructure

# Install and deploy
pip install -r requirements.txt
cdk bootstrap
cdk deploy
```

### For Terraform Projects
```bash
# Extract downloaded project
unzip aws-vpc-setup-terraform-aws.zip
cd aws-vpc-setup

# Deploy infrastructure
terraform init
terraform plan
terraform apply
```

### For FastAPI Projects
```bash
# Extract downloaded project
unzip user-service-api-python-fastapi.zip
cd user-service-api

# Run development server
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 🔒 Permissions Required

### For Simple Generator
- ✅ **Read access** to this repository
- ✅ **No additional permissions needed**

### For Repository Creation Workflows
- ✅ **Read access** to this repository
- ✅ **Repository creation permissions** in your account
- ✅ **Actions permissions** to run workflows

## 🛠️ Troubleshooting

### Common Issues

**❌ "Repository already exists"**
- Choose a different project name
- Or manually delete the existing repository

**❌ "Permission denied"**
- Check your GitHub permissions
- Ensure you can create repositories in your account

**❌ "Template validation failed"**
- Report as an issue - this shouldn't happen with built-in templates

**❌ "Workflow failed"**
- Check the Actions logs for specific error details
- Most issues are related to permissions or naming conflicts

### Getting Help

1. **Check Actions Logs**: Detailed error information in workflow runs
2. **Review Input Validation**: Ensure project names follow GitHub naming rules
3. **File Issues**: Report problems in this repository's Issues section

## 🎉 Success Tips

### Project Naming
- ✅ Use lowercase letters, numbers, hyphens
- ✅ Start with a letter
- ✅ Keep under 100 characters
- ❌ Avoid spaces, special characters

### Template Selection
- ✅ Choose based on your target technology
- ✅ Consider your deployment environment (AWS vs Azure)
- ✅ Match your team's preferred language

### Customization
- ✅ Fill in meaningful descriptions
- ✅ Use your actual name and email
- ✅ Set appropriate regions and environments

---

🚀 **Ready to generate your first project?** Go to the **Actions** tab and choose a workflow!
