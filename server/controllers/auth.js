const bcrypt=require('bcryptjs');const jwt=require('jsonwebtoken');const User=require('../models/User');const {parseStudentId}=require('../utils/studentId');
function sign(id,role){return jwt.sign({id,role},process.env.JWT_SECRET,{expiresIn:'7d'})}
async function login(req,res){const {identifier,password}=req.body||{};if(!identifier||!password)return res.status(400).json({message:'Login ID/email and password are required'});const key=String(identifier).trim().toLowerCase();const user=await User.findOne({$or:[{email:key},{studentId:key.toUpperCase()}]});if(!user||!(await bcrypt.compare(password,user.passwordHash)))return res.status(401).json({message:'Invalid credentials'});res.json({token:sign(user._id,user.role),user:{id:user._id,name:user.name,email:user.email,studentId:user.studentId,class:user.class,section:user.section,rollNumber:user.rollNumber,role:user.role}})}
async function me(req,res){res.json({user:req.user})}
module.exports={login,me};
