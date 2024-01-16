import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

dotenv.config();

try {
    await mongoose.connect(process.env.MONGO);
    console.log(`MongoDb is connected on ${process.env.PORT}`);
} catch (error) {
    console.error(error);
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.listen(process.env.PORT)
    .then(() => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    .catch((error) => {
        console.error(`Error starting server: ${error}`);
    });
