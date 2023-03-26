import express from 'express';

import { getImage } from '../controllers/image';

import { postImage } from '../controllers/image';

import { storage } from '../helpers/storage';

const router = express.Router();

router.get('/', getImage);

router.post('/', storage, postImage);

export {router as imageRoutes};