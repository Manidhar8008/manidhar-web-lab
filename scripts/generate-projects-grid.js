#!/usr/bin/env node

/**
 * Generate Featured Work Grid
 * Scans /projects/ for meta.json files and generates markdown grid for README.md
 * Usage: node scripts/generate-projects-grid.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECTS_DIR = path.join(__dirname, '../projects');
const README_PATH = path.join(__dirname, '../README.md');
const GRID_START_MARKER = '<!-- FEATURED_WORK_START -->';
const GRID_END_MARKER = '<!-- FEATURED_WORK_END -->';

// Read all projects with meta.json
function scanProjects() {
  const projects = [];

  const projectFolders = fs.readdirSync(PROJECTS_DIR).filter(file => {
    return fs.statSync(path.join(PROJECTS_DIR, file)).isDirectory();
  });

  projectFolders.forEach(folder => {
    const metaPath = path.join(PROJECTS_DIR, folder, 'meta.json');
    if (fs.existsSync(metaPath)) {
      const metaContent = fs.readFileSync(metaPath, 'utf8');
      const meta = JSON.parse(metaContent);
      meta.folder = folder;
      projects.push(meta);
    }
  });

  // Sort by order
  return projects.sort((a, b) => (a.order || 999) - (b.order || 999));
}

// Generate markdown for featured projects
function generateFeaturedGrid(projects) {
  const featured = projects.filter(p => p.featured);

  if (featured.length === 0) {
    return '';
  }

  let markdown = '\n### 📊 Featured Work\n\n';

  featured.forEach((project, idx) => {
    const badge = project.type === 'client' ? '🤝 Client Work' : '✨ Demo';
    const liveLink = project.live_url !== '#' ? `[Live Demo](${project.live_url})` : '`Coming soon`';

    markdown += `#### ${project.title}\n\n`;
    markdown += `**${project.description}**\n\n`;
    markdown += `![${project.title}](${project.screenshot_path})\n\n`;
    markdown += `${badge} | ${liveLink} | [View Source](${project.github_folder})\n\n`;
    markdown += `**Stack**: ${project.tags.join(' • ')}\n\n`;

    if (project.performance) {
      markdown += `**Performance**: Lighthouse ${project.performance.lighthouse} | `;
      markdown += `Bundle ${project.performance.bundle_size_kb}KB | `;
      markdown += `Core Web Vitals: ${project.performance.core_web_vitals}\n\n`;
    }

    markdown += `---\n\n`;
  });

  return markdown;
}

// Generate all projects grid (client + demo)
function generateAllProjectsGrid(projects) {
  const clientProjects = projects.filter(p => p.type === 'client');
  const demoProjects = projects.filter(p => p.type === 'demo');

  let markdown = '';

  if (clientProjects.length > 0) {
    markdown += '## 🤝 Client Work\n\n';
    markdown += generateProjectGrid(clientProjects);
    markdown += '\n';
  }

  if (demoProjects.length > 0) {
    markdown += '## ✨ Personal Demos & Experiments\n\n';
    markdown += generateProjectGrid(demoProjects);
  }

  return markdown;
}

// Generate project grid table
function generateProjectGrid(projects) {
  if (projects.length === 0) return '';

  let markdown = '| Project | Description | Tech Stack | Status |\n';
  markdown += '|---------|-------------|-----------|--------|\n';

  projects.forEach(project => {
    const statusBadge = project.status === 'live' ? '🔴 Live' : '⚙️ Building';
    markdown += `| **${project.title}** | ${project.description} | ${project.tags.join(', ')} | ${statusBadge} |\n`;
  });

  markdown += '\n';
  return markdown;
}

// Main execution
try {
  const projects = scanProjects();
  const featuredGrid = generateFeaturedGrid(projects);
  const allProjectsGrid = generateAllProjectsGrid(projects);

  console.log('✅ Project scanning complete');
  console.log(`📦 Found ${projects.length} projects`);
  console.log(`🌟 Featured: ${projects.filter(p => p.featured).length}`);

  // Return data for external use
  console.log('\n=== FEATURED WORK GRID ===\n');
  console.log(featuredGrid);

  console.log('\n=== ALL PROJECTS GRID ===\n');
  console.log(allProjectsGrid);

  process.exit(0);
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
