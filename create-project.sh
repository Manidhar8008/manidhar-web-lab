#!/bin/bash

# Web Product Lab Quick Start Script
# Creates a new project with meta.json template for automation

set -e

echo "🚀 Web Product Laboratory - New Project"
echo "======================================="
echo ""

# Get project name
read -p "Enter project name (kebab-case, e.g., my-saas-app): " PROJECT_NAME

if [ -z "$PROJECT_NAME" ]; then
  echo "Error: Project name required"
  exit 1
fi

# Get project type
echo ""
echo "Select project type:"
echo "1) demo"
echo "2) client"
read -p "Enter choice (1-2): " PROJECT_TYPE_CHOICE

case $PROJECT_TYPE_CHOICE in
  1) PROJECT_TYPE="demo" ;;
  2) PROJECT_TYPE="client" ;;
  *) PROJECT_TYPE="demo" ;;
esac

# Get description
echo ""
read -p "Enter short description: " PROJECT_DESC

if [ -z "$PROJECT_DESC" ]; then
  PROJECT_DESC="A production-ready web project"
fi

# Create from template
echo ""
echo "📋 Creating project from template..."
cp -r templates/react-tailwind-template "projects/$PROJECT_NAME"

echo "📦 Installing dependencies..."
cd "projects/$PROJECT_NAME"
npm install

# Create meta.json with user input
echo "🎯 Creating meta.json..."

# Calculate order (number of existing projects + 1)
ORDER=$(ls -d ../*/meta.json 2>/dev/null | wc -l | xargs) || ORDER=1
ORDER=$((ORDER + 1))

cat > meta.json << EOF
{
  "title": "$(echo $PROJECT_NAME | sed 's/-/ /g' | sed 's/.*/\L&/' | sed 's/^\(.\)/\U\1/')",
  "description": "$PROJECT_DESC",
  "type": "$PROJECT_TYPE",
  "status": "building",
  "live_url": "#",
  "github_folder": "projects/$PROJECT_NAME",
  "screenshot_path": "assets/screenshots/$PROJECT_NAME-hero.png",
  "tags": ["React", "Tailwind", "Vite"],
  "performance": {
    "lighthouse": 0,
    "core_web_vitals": "pending",
    "bundle_size_kb": 0
  },
  "featured": false,
  "order": $ORDER
}
EOF

echo ""
echo "✅ Project created successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Update meta.json with your project details"
echo "2. Customize src/App.jsx"
echo "3. Add screenshot to assets/screenshots/$PROJECT_NAME-hero.png"
echo "4. Update tags and live_url when ready"
echo ""
echo "🎬 To start developing:"
echo "   npm run dev"
echo ""
echo "📦 When finished, set featured: true in meta.json to show in README"
echo ""
echo "Happy building! 🎉"

