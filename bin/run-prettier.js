#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the current working directory (the project using this package)
const cwd = process.cwd();

// Check if .prettierignore exists in the target project, if not, create one
const targetPrettierIgnorePath = path.join(cwd, '.prettierignore');
if (!fs.existsSync(targetPrettierIgnorePath)) {
  console.log('Creating .prettierignore file...');
  const defaultIgnore = `node_modules
dist
build
coverage
    
*.min.*

.vscode
.gitignore
.prettierignore
.eslintignore
.prettierrc
package.json
package-lock.json
`;
  fs.writeFileSync(targetPrettierIgnorePath, defaultIgnore);
}

// Check if .prettierrc exists in the target project, if not, create one
const targetPrettierRcPath = path.join(cwd, '.prettierrc');
if (!fs.existsSync(targetPrettierRcPath)) {
  console.log('Creating .prettierrc file...');
  const defaultConfig = {
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: true,
    semi: true,
    experimentalTernaries: true,
    singleQuote: true,
    jsxSingleQuote: false,
    quoteProps: "consistent",
    trailingComma: "es5",
    singleAttributePerLine: true,
    htmlWhitespaceSensitivity: "css",
    vueIndentScriptAndStyle: false,
    proseWrap: "preserve",
    insertPragma: false,
    printWidth: 100,
    requirePragma: false,
    tabWidth: 2,
    useTabs: false,
    embeddedLanguageFormatting: "auto",
    endOfLine: "auto"
  };
  fs.writeFileSync(targetPrettierRcPath, JSON.stringify(defaultConfig, null, 2) + '\n');
}

// Run prettier on the target project
try {
  console.log('Running prettier on your project...');
  execSync('npx prettier --write \'./**/*.{js,ts,vue,json}\' --ignore-path .prettierignore', {
    cwd,
    stdio: 'inherit'
  });
  console.log('Formatting complete!');
} catch (error) {
  console.error('Error running prettier:', error.message);
  process.exit(1);
} 