#!/bin/bash
# GitHub Actions Simulation Script

echo "🧪 Simulating GitHub Actions Environment"
echo "========================================"

# Simulate npm ci (clean install)
echo "📦 Running npm ci..."
npm ci

# Test template validation (this was failing)
echo "🔍 Validating template: terraform-aws"
node bin/repo-manager.js validate templates/terraform-aws

# Test project generation
echo "🏗️ Generating project..."
mkdir -p output
node bin/repo-manager.js create \
  --template terraform-aws \
  --name test-github-actions \
  --directory ./output \
  --no-git \
  --no-install

echo "✅ GitHub Actions simulation completed successfully!"
echo "📁 Generated files:"
find output -type f | head -10
