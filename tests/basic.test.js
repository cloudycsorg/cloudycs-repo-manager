const fs = require('fs');
const path = require('path');

describe('CloudyCS Repository Manager', () => {
  test('package.json exists and has correct structure', () => {
    const packagePath = path.join(__dirname, '..', 'package.json');
    expect(fs.existsSync(packagePath)).toBe(true);
    
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    expect(packageJson.name).toBe('cloudycs-repo-manager');
    expect(packageJson.type).toBe('commonjs');
    expect(packageJson.dependencies.inquirer).toBe('8.2.6');
  });

  test('CLI binary exists', () => {
    const binPath = path.join(__dirname, '..', 'bin', 'repo-manager.js');
    expect(fs.existsSync(binPath)).toBe(true);
  });

  test('templates directory exists', () => {
    const templatesPath = path.join(__dirname, '..', 'templates');
    expect(fs.existsSync(templatesPath)).toBe(true);
    
    const templates = fs.readdirSync(templatesPath);
    expect(templates.length).toBeGreaterThan(0);
  });

  test('src directory structure', () => {
    const srcPath = path.join(__dirname, '..', 'src');
    expect(fs.existsSync(srcPath)).toBe(true);
    
    const commandsPath = path.join(srcPath, 'commands');
    expect(fs.existsSync(commandsPath)).toBe(true);
  });
});