const Jimp = require('jimp');
const through = require('through2');


module.exports = (imagesMetadata) => {
  const stream = through.obj();

  imagesMetadata.forEach((image) => {
    let loadedImage;
    Jimp.read(image.path)
      .then((image) => {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
      })
      .then((font) => {
        loadedImage
          .print(font, image.width - 350, image.height - 100, image.creationTime)
          .write(image.path);
        const data = `Image ${image.path} processed`;
        stream.push(data);
      })
      .catch((err) => {
        const data = `Something wrong ${err.message}`;
        stream.push(data);
      });
  });
  return stream;
};
