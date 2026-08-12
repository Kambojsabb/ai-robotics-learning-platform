const jwt=require('jsonwebtoken');
const User=require('../models/User');
async function authenticate(req,res,next){try{const h=req.headers.authorization||'';if(!h.startsWith('Bearer '))return res.status(401).json({message:'Authentication required'});const token=h.slice(7);const decoded=jwt.verify(token,process.env.JWT_SECRET);const user=await User.findById(decoded.id).select('-passwordHash');if(!user)return res.status(401).json({message:'Invalid session'});req.user=user;next()}catch(e){res.status(401).json({message:'Invalid or expired token'})}}
const authorize=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:'You are not allowed to perform this action'});
module.exports={authenticate,authorize};
