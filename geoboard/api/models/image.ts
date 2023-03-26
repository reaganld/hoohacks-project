import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    imagePath: { type: String, required: true },
    x: { type: String, required: true },
    y: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);

export {Image}