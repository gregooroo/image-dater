const path = require('path');
const loadFiles = require('./loadFiles');
const extractExifData = require('./extractExifData');

module.exports = async (dir) => {
  const sourceDir = path.resolve(dir);
  let filesArray;
  // Load files from source directory
  try {
    filesArray = await loadFiles(sourceDir);
  } catch (err) {
    throw err;
  }
  const imagesMetadata = await extractExifData(filesArray);
  return imagesMetadata;
};
