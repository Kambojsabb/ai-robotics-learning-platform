require('dotenv').config();const express=require('express');const cors=require('cors');const helmet=require('helmet');const morgan=require('morgan');const connectDB=require('./config/db');const {notFound,errorHandler}=require('./middleware/error');
const app=express();app.use(helmet());app.use(cors({origin:process.env.CLIENT_URL||'*'}));app.use(express.json({limit:'1mb'}));app.use(morgan('dev'));
app.get('/',(req,res)=>res.json({message:'AI & Robotics Learning Platform API',status:'OK'}));
app.use('/api/auth',require('./routes/auth'));app.use('/api/users',require('./routes/users'));app.use('/api/content',require('./routes/content'));app.use('/api/tasks',require('./routes/tasks'));app.use('/api/tests',require('./routes/tests'));app.use('/api/announcements',require('./routes/announcements'));app.use('/api/notifications',require('./routes/notifications'));app.use('/api/dashboard',require('./routes/dashboard'));
app.use(notFound);app.use(errorHandler);
const port=process.env.PORT||5000;connectDB().then(()=>app.listen(port,'0.0.0.0',()=>console.log(`API listening on ${port}`))).catch(e=>{console.error('DB connection failed',e);process.exit(1)});
