 const mongoose = require("mongoose"); 

 const db = 
 "mongodb+srv://bijaybk437:bijay4567@cluster1.zkwcv.mongodb.net/?retryWrites=true&w=majority&appName=cluster1";

 mongoose.set("strictQuery", true, "useNewUrlParser", true );

 const connectDB = async ()=> {
    try{
        await mongoose.connect(db);
        console.log("MongoDB is connected....");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
 };
 module.exports = connectDB;
