import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    imagePath: { type: String, required: true },
    x: { type: Number, required: false },
    y: { type: Number, required: false },
});

const Image = mongoose.model('Image', imageSchema);

export {Image}