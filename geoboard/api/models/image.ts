import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    imagePath: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);

export {Image}