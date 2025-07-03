import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';
import dotenv from 'dotenv';
dotenv.config();


export const connectDB = async () => {
   mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(() => {
    console.log('connected successfully');
   }).catch((err) => {
    console.log('something went wrong', err);
   })
}