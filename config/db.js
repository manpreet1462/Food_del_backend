import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://manpreet274:0123456@cluster0.k5yutg8.mongodb.net/Food_delivery').then(()=>console.log("DB connected"));
}

 