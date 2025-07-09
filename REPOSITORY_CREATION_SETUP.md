# 🔐 Repository Creation Setup Guide

## Issue: "Resource not accessible by integration" Error

If you encounter this error when using the **Medium** or **Advanced** workflows that create repositories:

```
RequestError [HttpError]: Resource not accessible by integration
Error: Unhandled error: HttpError: Resource not accessible by integration
```

This means the default `GITHUB_TOKEN` doesn't have permission to create repositories.

## 🛠️ Solution Options

### Option 1: GitHub App Authentication (Recommended for Organizations)

#### Step 1: Create a GitHub App

1. Go to GitHub Settings → Developer settings → GitHub Apps
2. Click "New GitHub App"
3. Fill in basic information:
   - **Name**: `CloudyCS Repository Manager`
   - **Homepage URL**: Your repository URL
   - **Webhook**: Uncheck "Active"
4. Set permissions:
   - **Repository permissions**:
     - Contents: Read & Write
     - Administration: Write
     - Metadata: Read
5. Click "Create GitHub App"

#### Step 2: Generate Private Key

1. In your GitHub App settings, scroll to "Private keys"
2. Click "Generate a private key"
3. Download the `.pem` file

#### Step 3: Install the App

1. Go to your GitHub App → "Install App"
2. Install it on your account/organization
3. Select repositories or "All repositories"

#### Step 4: Add App Secrets to Repository

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add these secrets:
   - `APP_ID`: Your GitHub App ID (found in app settings)
   - `APP_PRIVATE_KEY`: Contents of the `.pem` file

#### Step 5: Update Workflows

The workflows are already configured to use GitHub App authentication. They will automatically use the app token when `APP_ID` and `APP_PRIVATE_KEY` are available.

### Option 2: Personal Access Token (Simple Setup)

#### Step 1: Create a Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name: `CloudyCS Repository Manager`
4. Select the `repo` scope (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)

#### Step 2: Add Token to Repository Secrets

1. Go to your repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `PAT_TOKEN`
4. Value: Paste your personal access token
5. Click "Add secret"

## 🎯 Workflow Behavior

The workflows will use authentication in this order:
1. GitHub App token (if `APP_ID` and `APP_PRIVATE_KEY` are configured)
2. Personal Access Token (if `PAT_TOKEN` is configured)  
3. Default `GITHUB_TOKEN` (limited permissions - will fail for repo creation)

## 🎯 Affected Workflows

- **🏗️ Medium - Create & Deploy Repository** (`create-repository.yml`)
- **⚡ Advanced - Create Project Repository** (`create-project.yml`)

## 🔒 Security Comparison

| Method | Security | Scope | Audit Trail | Best For |
|--------|----------|-------|-------------|----------|
| GitHub App | ✅ High | Limited to specific permissions | ✅ Detailed | Organizations |
| PAT Token | ⚠️ Medium | Full user access | ⚠️ Limited | Personal use |

## 🚀 Alternative: Use Simple Workflow

If you don't want to set up authentication, use the **🚀 Simple - Project Generator** workflow instead:
- No repository creation required
- Downloads generated project as ZIP
- Works with default GitHub permissions

## 📚 More Information

- [GitHub App Documentation](https://docs.github.com/en/apps/creating-github-apps)
- [GitHub PAT Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
