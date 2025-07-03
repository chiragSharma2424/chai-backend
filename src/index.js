import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

connectDB().then(() => {
   app.listen(process.env.PORT, () => {
    console.log(`server started on pot ${process.env.PORT}`);
   });
}).catch((err) => {
    console.log("connection failed", err)
})

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