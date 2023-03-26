import { Image } from "../models/image";

const getImage = async (req, res) => {
  try {
    const coords = req!.param!.coords
    const query = { coords: coords };
    const image = await Image.findOne(query);
    if (image) {
        res.status(200).send(image);
    } else {
        res.status(404).send(`Failed to find an image: coord ${coords}`);
    }
  } catch (error) {
    res.status(404).send(`Failed to find an image: coord ${req?.params?.coord}`);
}
};

const postImage = async (req, res) => {
  const { coords} = req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
  const image = new Image({
    coords,
    imagePath,
  });
  const createdImage = await image.save();
  res.status(201).json({
    image: {
      ...createdImage._id,
    },
  });
};

export{getImage, postImage};