const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);

module.exports = async (src) => {
  const sourceDirectory = src;
  let loadDirectory;
  try {
    loadDirectory = await readdir(sourceDirectory, { withFileTypes: true });
  } catch (err) {
    return new Error('Cannot read directory. Check if path is correct.');
  }

  // TODO: Return only images
  return loadDirectory
    .filter(file => !file.isDirectory())
    .map(file => path.join(sourceDirectory, file.name));
};
