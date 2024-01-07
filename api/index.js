import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()
try {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log(`MongoDb is connected on ${process.env.PORT}`);
    })
} catch (error) {
    console.log(error);
}
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000!!!');
})