const Jimp = require('jimp');


module.exports = (image) => {
  let loadedImage;
  Jimp.read(image.path)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
    })
    .then((font) => {
      loadedImage.print(font, image.width - 350, image.height - 100, image.creationTime)
        .write(image.path);
    })
    .catch(err => console.error(err));
};
