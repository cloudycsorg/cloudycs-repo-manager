# 🔐 Repository Creation Setup Guide

## Issue: "Resource not accessible by integration" Error

If you encounter this error when using the **Medium** or **Advanced** workflows that create repositories:

```
RequestError [HttpError]: Resource not accessible by integration
Error: Unhandled error: HttpError: Resource not accessible by integration
```

This means the default `GITHUB_TOKEN` doesn't have permission to create repositories.

## 🛠️ Solution: Set up a Personal Access Token (PAT)

### Step 1: Create a Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name: `CloudyCS Repository Manager`
4. Select the `repo` scope (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)

### Step 2: Add Token to Repository Secrets

1. Go to your repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `PAT_TOKEN`
4. Value: Paste your personal access token
5. Click "Add secret"

### Step 3: Re-run the Workflow

The workflows will now use your PAT token and should be able to create repositories successfully.

## 🎯 Affected Workflows

- **🏗️ Medium - Create & Deploy Repository** (`create-repository.yml`)
- **⚡ Advanced - Create Project Repository** (`create-project.yml`)

## 🔒 Security Notes

- The PAT token gives full access to your repositories
- Only add it to repositories you trust
- You can revoke the token anytime from GitHub settings
- The token is encrypted and only visible to workflow runs

## 🚀 Alternative: Use Simple Workflow

If you don't want to set up a PAT token, use the **🚀 Simple - Project Generator** workflow instead:
- No repository creation required
- Downloads generated project as ZIP
- Works with default GitHub permissions

## 📚 More Information

- [GitHub PAT Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
