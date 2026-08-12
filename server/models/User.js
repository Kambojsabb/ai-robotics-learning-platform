const mongoose=require('mongoose');
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,lowercase:true,trim:true,sparse:true,unique:true},studentId:{type:String,uppercase:true,trim:true,sparse:true,unique:true},class:{type:Number,min:1,max:12},section:{type:String,uppercase:true,trim:true},rollNumber:{type:Number,min:1},passwordHash:{type:String,required:true},role:{type:String,enum:['ADMIN','TEACHER','STUDENT'],required:true},createdAt:{type:Date,default:Date.now},updatedAt:{type:Date,default:Date.now}});
schema.pre('save',function(next){this.updatedAt=new Date();next()});
module.exports=mongoose.model('User',schema);
