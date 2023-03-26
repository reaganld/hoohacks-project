import express from 'express';

import { getImages } from '../controllers/image';

import { postImage } from '../controllers/image';

import { storage } from '../helpers/storage';

const router = express.Router();

router.get('/', getImages);

router.post('/', storage, postImage);

export {router as imageRoutes};