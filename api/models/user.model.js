import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar:{
            type:String,
            default:"https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg"
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User',UserSchema);
export default User;