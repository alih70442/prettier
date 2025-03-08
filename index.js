const { execSync } = require('child_process');
const path = require('path');

/**
 * Run prettier on the specified directory
 * @param {string} directory - The directory to format
 * @param {string} pattern - The glob pattern for files to format
 * @param {string} ignorePath - Path to the .prettierignore file
 */
function formatDirectory(directory = '.', pattern = '**/*.{js,ts,vue,json}', ignorePath = '.prettierignore') {
  try {
    execSync(`npx prettier --write '${pattern}' --ignore-path ${ignorePath}`, {
      cwd: directory,
      stdio: 'inherit'
    });
    return true;
  } catch (error) {
    console.error('Error running prettier:', error.message);
    return false;
  }
}

module.exports = {
  formatDirectory
};
