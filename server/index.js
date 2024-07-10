import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/',authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log('Server is running');
})
