import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const db = async()=>{
    try {
        const cn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // console.log(cn)
        console.log(cn.connection.host)
    } catch (error) {
        console.log('ERROR DURING CONNECTION'+error)
    }
}


export default db;