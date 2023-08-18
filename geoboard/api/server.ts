import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser = require("body-parser");
require('dotenv').config({ path: './prop.env' });


// const { MongoClient } = require("mongodb");
const { mongoose } = require('mongoose');

import { imageRoutes } from './routes/image';


const app = express();
const port = process.env.PORT;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mymongodb.vwvixbf.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err) => console.log(`Could not connect to database server`, err));

app.use(bodyParser.json());

app.use(cors());

app.use('/images', express.static(path.join('images')));

app.use('/api/images', imageRoutes);



