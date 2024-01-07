import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config()
try {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log(`MongoDb is connected on ${process.env.PORT}`);
    })
} catch (error) {
    console.log(error);
}
const app = express()

app.use('/api/user',userRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000!!!');
})