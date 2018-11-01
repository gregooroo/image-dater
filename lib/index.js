const path = require('path');
const loadFiles = require('./core/loadFiles');
const extractExifData = require('./core/extractExifData');
const dateIntoImage = require('./core/dateIntoImage');

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

  dateIntoImage(imagesMetadata)
    .on('data', data => console.log(data));
};
