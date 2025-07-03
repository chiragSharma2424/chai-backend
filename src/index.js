import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

connectDB()

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`).then(() => {
            console.log("database connected successfully")
        }).catch(() => {
            console.log('something went wrong');
        })
    } catch(error) {
        console.log(error);
        throw err
    }
})()
*/