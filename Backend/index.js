
import express from 'express';
import dotenv from 'dotenv';
import mongoose from'mongoose';
import cors from 'cors';
import userRoute from '../Backend/route/user.route.js'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config(); 
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI ;
//connect to MongoDB

mongoose.connect(URI)
 .then(() => console.log('MongoDB connected...'))
 .catch(err => console.log(err));
 app.get('/',async(req, res) => {
  res.status(500).send("hello")
 }
)


//definig routes
app.use('/user', userRoute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
