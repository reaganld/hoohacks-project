import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    imagePath: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
});

const Image = mongoose.model('Image', imageSchema);

export {Image}