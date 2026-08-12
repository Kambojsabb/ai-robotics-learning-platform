const mongoose=require('mongoose');
module.exports=mongoose.model('Notification',new mongoose.Schema({recipient:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},title:String,message:String,type:String,relatedId:mongoose.Schema.Types.ObjectId,isRead:{type:Boolean,default:false},createdAt:{type:Date,default:Date.now}}));
