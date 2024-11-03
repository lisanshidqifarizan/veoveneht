import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose
.connect(process.env.MONGOAUTH)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.error(err);
})

const app = express()

app.listen(3000, () => {
    console.log('running in 3000')
})

app.use('/api/user', userRoutes)