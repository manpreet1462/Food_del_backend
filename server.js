import cors from 'cors'
import express from 'express'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
const app=express();






const port= process.env.PORT || 8080

//middlewares
app.use(express.json());
app.use(cors());   

//DB connection 
connectDB();

//Api endpoints
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port,()=>{
    console.log(`SERVER CONNECTED AT PORT ${port}`);
})



