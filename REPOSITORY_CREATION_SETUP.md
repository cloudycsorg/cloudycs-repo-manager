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

#### Step 4: Add App Secrets to Organization

1. Go to your organization → Settings → Secrets and variables → Actions
2. Add these organization secrets:
   - `ORG_APP_ID`: Your GitHub App ID (found in app settings)
   - `ORG_PRIVATE_KEY`: Contents of the `.pem` file

**Note:** Organization secrets are shared across all repositories in the organization, making them ideal for GitHub App authentication.

#### Step 5: Update Workflows

The workflows are already configured to use GitHub App authentication. They will automatically use the app token when `ORG_APP_ID` and `ORG_PRIVATE_KEY` are available.

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

1. GitHub App token (if `ORG_APP_ID` and `ORG_PRIVATE_KEY` are configured)
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

## � Quick Fix for "Resource not accessible by integration" Error

If you're getting this error, follow this **exact checklist**:

### ✅ Checklist 1: Verify GitHub App Permissions

1. Go to GitHub Settings → Developer settings → GitHub Apps
2. Click your app → **Permissions & events**
3. **Repository permissions** must have:
   - **Administration**: **Write** ← This is critical for repo creation
   - **Contents**: **Write**
   - **Metadata**: **Read**
4. If you changed permissions, scroll down and click **"Save changes"**
5. **Important**: You must **reinstall the app** after permission changes

### ✅ Checklist 2: **CRITICAL** - Install App on Organization

**⚠️ This is the most commonly missed step!**

1. In your GitHub App → **Install App** (left sidebar)
2. Look for "cloudycsorg" in the list
3. **If it shows "Install"** - click it and install the app
4. **If it shows "Installed"** - you're good
5. When installing:
   - Select **"All repositories"** (recommended)
   - Click **"Install"**

**Common Error**: Creating a GitHub App ≠ Installing it. You must explicitly install it on your organization!

### ✅ Checklist 3: Verify Organization Secrets

1. Go to your **organization** → Settings → Secrets and variables → Actions
2. Verify these secrets exist and have correct values:
   - `ORG_APP_ID`: Should be a number (e.g., `123456`)
   - `ORG_PRIVATE_KEY`: Should start with `-----BEGIN RSA PRIVATE KEY-----`

### ✅ Checklist 4: Test Your Setup

Run this curl command to test if your app can create repos:

```bash
# Replace YOUR_GITHUB_TOKEN with a token from your app
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{"name":"test-repo-delete-me","private":true}'
```

If this fails with 403, your app permissions are wrong.

## �🔧 Troubleshooting "Resource not accessible by integration" Error

If you're getting this error even after setting up GitHub App authentication, follow these debugging steps:

### 🔍 Step 1: Verify Organization Secrets

1. Go to your organization → Settings → Secrets and variables → Actions
2. Confirm these secrets exist:
   - ✅ `ORG_APP_ID` - Should contain your GitHub App ID (numeric value)
   - ✅ `ORG_PRIVATE_KEY` - Should contain the entire `.pem` file content (including headers)

### 🔍 Step 2: Check GitHub App Permissions

Your GitHub App must have these **exact** permissions:

**Repository permissions:**
- ✅ **Administration**: **Write** (required for repo creation)
- ✅ **Contents**: **Write** 
- ✅ **Metadata**: **Read**

**To verify/update permissions:**
1. Go to GitHub Settings → Developer settings → GitHub Apps
2. Click on your app → Permissions & events
3. Update permissions if needed
4. **Important**: After changing permissions, you must re-install the app

### 🔍 Step 3: Verify App Installation

The GitHub App must be installed on your organization/account:

1. Go to your GitHub App → Install App (left sidebar)
2. Check if it's installed on your organization
3. If not installed: Click "Install" next to your organization
4. Select "All repositories" or the specific repositories you need

### 🔍 Step 4: Test App Credentials

You can test your GitHub App credentials with this simple script:

```bash
# Test if your app can authenticate
curl -H "Authorization: Bearer YOUR_APP_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/user
```

### 🔍 Step 5: Common Issues

| Issue | Solution |
|-------|----------|
| App ID is wrong | Double-check the App ID in your app settings |
| Private key format | Ensure the entire `.pem` file content is copied (including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`) |
| App not installed | Install the app on your organization |
| Wrong permissions | App needs **Administration: Write** permission |
| Old permissions | Re-install the app after changing permissions |

### 🔍 Step 6: Alternative - Use Personal Access Token

If GitHub App setup is complex, you can use a Personal Access Token instead:

1. Create a PAT with `repo` scope
2. Add it as `PAT_TOKEN` organization secret
3. The workflow will automatically fall back to PAT if GitHub App fails
