import { Image } from "../models/image";

const getImage = async (req, res) => {
  const images = await Image.find();
  res.status(200).json({ images });
};

const postImage = async (req, res) => {
  const { x } = req.body.x;
  const { y } = req.body.y;
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