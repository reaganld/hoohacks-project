import { Image } from "../models/image";

const getImages = async (req, res) => {
    var images = [];
    const coords = req.body.split();
    var x = coords[0] - 2;
    var y = coords[1] + 2;
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        images.push(await Image.findById((x + i) + "," + (y + j)));
      }
    }
    res.status(200).json({ images });
};

const putImage = async (req, res) => {
  const { coords} = req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
//   const matchingImage = await Image.findOne({ coords: coords });
//   const mFilepath = matchingImage.imagePath;
//   mergeImages([imagePath, mFilepath])
//   .then( (b64) => {
//       let str:string = b64;
//       const imageName = 'test111';
//       const byteString = window.atob(str.split(",")[1]);
//       const arrayBuffer = new ArrayBuffer(byteString.length);
//       const int8Array = new Uint8Array(arrayBuffer);
//       for (let i = 0; i < byteString.length; i++) {
//         int8Array[i] = byteString.charCodeAt(i);
//       }
//       const blob = new Blob([int8Array], { type: 'image/png' });
//       const imageFile = new File([blob], imageName, { type: 'image/png' });
//     });
  const image = new Image({
    _id: coords,
    coords: coords,
    imagePath: imagePath
  });
  const createdImage = await image.save();
  res.status(201);
};

export{getImages, putImage};