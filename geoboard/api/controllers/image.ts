import { Image } from "../models/image";
import * as fs from 'fs';

const getImages = async (req, res) => {
    const images: any[] = [];
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
  const imageString = req.file.buffer.toString('utf8');
  const image = new Image({
    _id: coords,
    coords: coords,
    imagePath: imagePath,
    imageString: imageString
  });
  const createdImage = await image.save();
  res.status(201);
};


// Function to convert a file to a string
async function fileToString(filePath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export{getImages, putImage};