const im = require('imagemagick');
const { promisify } = require('util');
const getFormattedDate = require('../utils/date');

const readMetadata = promisify(im.readMetadata);

module.exports = async (filesArray) => {
  const promisesArray = filesArray.map(file => readMetadata(file));
  const resultArray = [];
  await Promise.all(promisesArray.map(
    async (exifPromise, index) => {
      const { exif } = await exifPromise;
      resultArray.push({
        path: filesArray[index],
        creationTime: getFormattedDate(exif.dateTimeOriginal),
        width: exif.pixelXDimension,
        height: exif.pixelYDimension,
      });
    },
  ));

  return resultArray;
};
