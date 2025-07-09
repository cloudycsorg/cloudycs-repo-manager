#!/bin/bash

# 🧪 Local GitHub Actions Simulation Script
# This script simulates the GitHub Actions workflow locally

set -e  # Exit on any error

echo "🚀 Starting Local GitHub Actions Simulation"
echo "================================================"

# Input parameters (can be overridden via environment variables)
TEMPLATE=${TEMPLATE:-"terraform-aws"}
PROJECT_NAME=${PROJECT_NAME:-"test-terraform-project"}
PROJECT_DESCRIPTION=${PROJECT_DESCRIPTION:-"Test project generated locally"}
AUTHOR_NAME=${AUTHOR_NAME:-"Local Test"}

echo "📋 Workflow Inputs:"
echo "  Template: $TEMPLATE"
echo "  Project Name: $PROJECT_NAME"
echo "  Description: $PROJECT_DESCRIPTION"
echo "  Author: $AUTHOR_NAME"
echo ""

# Step 1: Check environment
echo "🔧 Step 1: Environment Check"
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Current directory: $(pwd)"
echo ""

# Step 2: Install dependencies (simulate npm ci)
echo "📦 Step 2: Install Dependencies"
echo "Checking package-lock.json..."
if [ -f "package-lock.json" ]; then
    echo "✅ package-lock.json found"
    echo "Running npm ci simulation (using existing node_modules)..."
    # In a real CI environment, this would be npm ci
    # For local testing, we'll just verify dependencies are installed
    if [ -d "node_modules" ]; then
        echo "✅ node_modules directory exists"
    else
        echo "⚠️  node_modules not found, running npm install..."
        npm install
    fi
else
    echo "❌ package-lock.json not found!"
    exit 1
fi
echo ""

# Step 3: Validate template
echo "🎯 Step 3: Validate Template"
echo "🔍 Validating template: $TEMPLATE"
node bin/repo-manager.js validate "templates/$TEMPLATE"
echo ""

# Step 4: Generate project
echo "🏗️ Step 4: Generate Project"
echo "🚀 Generating project: $PROJECT_NAME"
echo "Using template: $TEMPLATE"

# Clean up previous output
rm -rf output
mkdir -p output

# Generate the project
node bin/repo-manager.js create \
  --template "$TEMPLATE" \
  --name "$PROJECT_NAME" \
  --directory ./output \
  --no-git \
  --no-install

echo ""

# Step 5: Verify results
echo "📋 Step 5: Verify Results"
cd "output/$PROJECT_NAME"

# Create generation info
cat > GENERATION_INFO.md << EOF
# 🚀 $PROJECT_NAME

**Template:** $TEMPLATE
**Generated:** $(date)
**Author:** $AUTHOR_NAME
**Description:** $PROJECT_DESCRIPTION

## 📁 Generated Files
EOF

find . -type f | sort >> GENERATION_INFO.md

echo "✅ Project generated successfully!"
echo "📁 Generated files:"
find . -type f | head -20

echo ""
echo "🎉 Local GitHub Actions Simulation Complete!"
echo "Generated project location: output/$PROJECT_NAME"
