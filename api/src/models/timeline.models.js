const mongoose = require("mongoose");

const timelineSchema=new mongoose.Schema(
     {
        img:{type:String, required:true},
        typeText:{type:String,required:false},
        like:{type:String,required:false},
        comment:{type:Array,default:["nice","good post","nice one","congratulation","abdul fire-The aag"]}


     },{
         versionKey:false,
         timeStamps:true,
     }


)

module.exports=mongoose.model("timeline",timelineSchema);