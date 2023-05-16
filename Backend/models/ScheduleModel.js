const mongoose=require('mongoose')
const {Schema}=mongoose
const ScheduleSchema=new Schema({
    sampleType:String,
    sampleNumber:String,
    date:Date,
    time:String,
    user:{},
    consultant:Boolean
})
const ScheduleModel=mongoose.model('schedule',ScheduleSchema)
module.exports=ScheduleModel