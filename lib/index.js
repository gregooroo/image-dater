const path = require('path');
const loadFiles = require('./loadFiles');

module.exports = (dir) => {
  const sourceDir = path.resolve(dir);
  // TODO: Make is async / await
  loadFiles(sourceDir)
    .then((files) => {
      console.log(files);
    })
    .catch(err => console.error(err));
};
