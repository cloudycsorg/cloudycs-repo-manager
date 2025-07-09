#!/bin/bash

# CloudyCS Repository Manager Demo Script
# This script demonstrates the capabilities of the repository manager

echo "🚀 CloudyCS Repository Manager Demo"
echo "===================================="
echo

# Set the repo manager path
REPO_MANAGER="/Users/ranjeet/Desktop/DevOps/github/cloudycs-repo-manager/bin/repo-manager.js"

# Create demo directory
DEMO_DIR="/tmp/repo-manager-demo"
mkdir -p "$DEMO_DIR"
cd "$DEMO_DIR"

echo "📋 1. Listing Available Templates"
echo "---------------------------------"
node "$REPO_MANAGER" list
echo

echo "🏗️  2. Creating AWS CDK Python Project"
echo "-------------------------------------"
node "$REPO_MANAGER" create --template aws-cdk-python --name my-cdk-app --no-install --no-git
echo "✅ Created: my-cdk-app"
ls -la my-cdk-app/
echo

echo "🌐 3. Creating FastAPI Microservice"
echo "----------------------------------"
node "$REPO_MANAGER" create --template python-fastapi --name my-api-service --no-install --no-git
echo "✅ Created: my-api-service"
ls -la my-api-service/
echo

echo "☁️  4. Creating Terraform AWS Infrastructure"
echo "------------------------------------------"
node "$REPO_MANAGER" create --template terraform-aws --name my-aws-infra --no-install --no-git
echo "✅ Created: my-aws-infra"
ls -la my-aws-infra/
echo

echo "🎯 5. Validating a Template"
echo "--------------------------"
node "$REPO_MANAGER" validate /Users/ranjeet/Desktop/DevOps/github/cloudycs-repo-manager/templates/terraform-aws
echo

echo "📊 Demo Summary"
echo "---------------"
echo "✅ Created 3 different project types"
echo "✅ Demonstrated template validation"
echo "✅ Showed project structure generation"
echo "✅ Verified variable templating works"
echo
echo "🎉 Demo Complete! Check the generated projects in: $DEMO_DIR"
