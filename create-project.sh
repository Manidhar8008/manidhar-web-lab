#!/bin/bash

# Web Product Lab Quick Start Script
# Run this to scaffold a new project

set -e

echo "🚀 Web Product Laboratory - Quick Start"
echo "======================================="
echo ""

# Get project name
read -p "Enter project name (kebab-case): " PROJECT_NAME

if [ -z "$PROJECT_NAME" ]; then
  echo "Error: Project name required"
  exit 1
fi

# Create from template
echo "📋 Creating project from template..."
cp -r templates/react-tailwind-template "projects/$PROJECT_NAME"

echo "📦 Installing dependencies..."
cd "projects/$PROJECT_NAME"
npm install

echo ""
echo "✅ Project created successfully!"
echo ""
echo "Next steps:"
echo "1. cd projects/$PROJECT_NAME"
echo "2. npm run dev"
echo "3. Edit src/App.jsx"
echo ""
echo "Happy building! 🎉"
