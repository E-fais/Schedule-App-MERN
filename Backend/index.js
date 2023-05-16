const express=require ('express')
const cors=require('cors')
const app=express()
const user=require('./models/UserModel.js')
const schedule=require('./models/ScheduleModel.js')
const dotenv=require('dotenv')
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const bcryptSalt=bcrypt.genSaltSync(10)
const cookieParser=require('cookie-parser')
const jwt=require('jsonwebtoken')
jwtSecret='jfksjflsdfjskl'
dotenv.config()




app.use(cors({
    credentials:true,
    origin:"http://127.0.0.1:5173"
}))
app.use(express.json())
app.use(cookieParser())
 mongoose.connect(process.env.MONGO_URL)
app.get('/',((req,res)=>res.send('server ok')))

app.post('/register',async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const userDoc= await user.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt)
        })
        res.status(200).json(userDoc)
    } catch (error) {
        res.status(422).json(error)
    }
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const userDoc=await user.findOne({email})
    try {
        if(userDoc){
            const checkPassword=bcrypt.compareSync(password,userDoc.password)
            if(checkPassword){
           jwt.sign({email:userDoc.email,id:userDoc._id},jwtSecret,{},(err,token)=>{
            if(err) throw err
            const {name,email,_id}=userDoc
            res.cookie('token',
            token,{
                httpOnly:true,
                sameSite:'none',
                secure:true
            }).json({name,email,_id})
           })
            }else{
             res.json('password not correct')}
            
         } else{res.json('email not found')}
    } catch (error) {
        throw error
    }

})
app.get('/test',(req,res)=>{
    res.send('react connected')
})
app.get('/profile',(req,res)=>{
    const {token}=req.cookies
    if(token){
        jwt.verify(token,jwtSecret,{},async(err,userDoc)=>{
            if(err) throw err;
            const {name,email,_id}=await user.findById(userDoc.id)
            res.json({name,email,_id})
        })
    }
})
app.post('/create-schedule',async (req,res)=>{
    const {user,sampleType,sampleNumber,consultant,date,time}=req.body
    try {
       const scheduleDoc= await schedule.create({
            sampleType,
            sampleNumber,
            user,
            consultant,
            date,
            time

        })
        res.json(scheduleDoc)
    } catch (error) {
        throw error
    }
})
app.get('/schedules',async(req,res)=>{
    res.json(await schedule.find())
})
app.post('/logout',(req,res)=>{
    res.cookie('token','').json(true)
})
app.listen(3000,((req,res)=>{
    console.log('server started')
}))