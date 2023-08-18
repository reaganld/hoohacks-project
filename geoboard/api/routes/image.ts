import express from 'express';

import { getImages } from '../controllers/image';

import { putImage } from '../controllers/image';

import { storage } from '../helpers/storage';

const router = express.Router();

router.get('/', getImages);

router.put('/', storage, putImage);

export {router as imageRoutes};