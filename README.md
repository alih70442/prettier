# Prettier Package

A simple and easy-to-use package that helps you integrate and run Prettier code formatting in any JavaScript/TypeScript project.

## Overview

This package provides a convenient way to add consistent code formatting to your projects using Prettier. It includes:

- A CLI tool to run Prettier on your project files
- Automatic creation of configuration files if they don't exist
- Default configuration with modern best practices
- Support for JavaScript, TypeScript, Vue, and JSON files

## Installation

### Global Installation

```bash
npm install -g prettier-package
```

### Local Installation

```bash
npm install --save-dev prettier-package
```

## Usage

### Command Line Interface

After installing the package, you can use the CLI tool to format your project:

```bash
npx run-prettier
```

This will:
1. Create a `.prettierignore` file if one doesn't exist
2. Create a `.prettierrc` configuration file if one doesn't exist
3. Run Prettier on all JavaScript, TypeScript, Vue, and JSON files in your project

### Programmatic Usage

You can also use the package programmatically in your Node.js scripts:

```javascript
const { formatDirectory } = require('prettier-package');

// Format the current directory with default settings
formatDirectory();

// Format a specific directory with custom patterns
formatDirectory('./src', '**/*.{js,jsx,ts,tsx}', '.custom-ignore-file');
```

## Configuration

### Default Configuration

The package comes with a default configuration that follows modern best practices:

```json
{
  "arrowParens": "avoid",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "semi": true,
  "experimentalTernaries": true,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "quoteProps": "consistent",
  "trailingComma": "es5",
  "singleAttributePerLine": true,
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "proseWrap": "preserve",
  "insertPragma": false,
  "printWidth": 100,
  "requirePragma": false,
  "tabWidth": 2,
  "useTabs": false,
  "embeddedLanguageFormatting": "auto",
  "endOfLine": "auto"
}
```

### Custom Configuration

You can customize the configuration by creating your own `.prettierrc` file in your project root. The CLI tool will respect your custom configuration if it exists.

## Integration with Git Hooks

This package includes Husky for Git hook integration. To set up pre-commit formatting:

1. Make sure you have initialized Git in your project:
   ```bash
   git init
   ```

2. Add the following to your package.json:
   ```json
   {
     "scripts": {
       "prepare": "husky"
     },
     "lint-staged": {
       "*.{js,mjs,jsx,ts,tsx,json,css,scss,vue}": [
         "prettier --write"
       ]
     }
   }
   ```

3. Create a pre-commit hook:
   ```bash
   npx husky add .husky/pre-commit "npx lint-staged"
   ```

## Ignoring Files

By default, the package creates a `.prettierignore` file with common exclusions:

```
node_modules
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
```

You can customize this file to exclude additional files or directories from formatting.

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
