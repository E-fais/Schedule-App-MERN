import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import NewSchedule from '../../components/Navbar/Schedule/NewSchedule'
import axios from 'axios'
import {format} from 'date-fns'
import './home.css'
function Home() {
  const {user}=useContext(UserContext)
  const [showForm,setShowForm]=useState(false)
  const[schedule,setSchedule]=useState([])
  useEffect(()=>{
    axios.get('/schedules').then(res=>{
      setSchedule(prev=>
       [ ...prev,...res.data]
      )
    })
  },[])
  if(showForm){
    return (
      <NewSchedule />
    )
  }

  //filtering schedules to upcoming and past
  let currentDate=new Date()
  let upcomingSchedules=[]
  let oldSchedules=[]

  if(schedule){
    schedule.forEach(scheds=>{
      let scheduleDate=new Date(scheds.date)
      if(scheduleDate>currentDate){
        upcomingSchedules.push(scheds)
      }else{
        oldSchedules.push(scheds)
      }
    })
   
  }
  console.log(upcomingSchedules,oldSchedules)
  return (
    <div className='home-container'>
       {user&& <button onClick={()=>setShowForm(true)}>Create new schedule</button>}
      <div>
        {
        schedule&&
        <div className='schedule-cards-container'>
          <h3 className='schedule-title'>Upcoming Schedules</h3>
         
         
         { upcomingSchedules.reverse().map(schedule=>
        { let schedulDate=new Date(schedule.date)
          let formattedDate=format(schedulDate,'dd-MM-yyyy')
           return(<div className='schedules-card'>
           <h2 className='card-h2'>
            Sample Number:{schedule.sampleNumber}
            </h2> 
            <h2 className='card-h2'>Sample Type:{schedule.sampleType}</h2>
            <div>
              <h2 className='card-h2'>Date:{formattedDate}</h2>
              <h2 className='card-h2'>Time:{schedule.time}</h2>
              <h2 className='card-h2'>Witness:{schedule.consultant?'Yes':'No'}</h2>
            </div>
            </div>)}
          )}
          </div>}
      </div>
    </div>
  )
}

export default Home