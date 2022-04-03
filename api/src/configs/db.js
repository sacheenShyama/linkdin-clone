const mongoose=require("mongoose");


const connect=()=>{
  return mongoose.connect(
    "mongodb+srv://sacheen:Mongodb_007@cluster0.seyhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )

}

module.exports=connect;