const Notification=require('../models/Notification');
async function list(req,res){res.json({items:await Notification.find({recipient:req.user._id}).sort({createdAt:-1}).limit(100)})}
async function read(req,res){await Notification.findOneAndUpdate({_id:req.params.id,recipient:req.user._id},{isRead:true});res.json({message:'Marked as read'})}
async function readAll(req,res){await Notification.updateMany({recipient:req.user._id,isRead:false},{isRead:true});res.json({message:'All notifications marked as read'})}
module.exports={list,read,readAll};
