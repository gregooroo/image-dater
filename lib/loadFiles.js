const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);

module.exports = async (src) => {
  let loadDirectory;
  try {
    loadDirectory = await readdir(src, { withFileTypes: true });
  } catch (err) {
    return new Error('Cannot read directory. Check if path is correct.');
  }

  // TODO: Return only images
  return loadDirectory
    .filter(file => !file.isDirectory())
    .map(file => file.name);
};
