import React, { useContext, useState } from "react";
import "./newSchedule.css";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
function NewSchedule() {
  const [sampleNumber,setSampleNumber]=useState('')
  const [sampleType,setSampleType]=useState('')
  const [date,setdDate]=useState()
  const [time,setTime]=useState('9.00 AM')
  const [consultant,setConsultant]=useState(false)
  const {user}=useContext(UserContext)
const createNewSchedule=async(e)=>{
  e.preventDefault()
axios.post('/create-schedule',{date,sampleNumber,sampleType,consultant,user,time})
window.location.href('/')
alert('new schedule created')
}
  return (
    <div className="container-div">
      <h2>Create a new schedule</h2>
      <div className="form-div">
        <form onSubmit={createNewSchedule}>
          <div>
            <label>Sample Number</label>
            <input type="text" placeholder="23-1108-31724" 
            required
            value={sampleNumber} 
            onChange={(e)=>setSampleNumber(e.target.value)}/>
          </div>
          <div>
            <label>Type Of Sample</label>
            <input type="text" placeholder="eg:sub base" 
            required
            value={sampleType}
            onChange={(e)=>setSampleType(e.target.value)}
            />
          </div>
          <div>
            <label>Date</label>
            <br />
            <input type="date" value={date}
            required
            onChange={(e)=>setdDate(e.target.value)} /> 
          </div>
          <div>
            <label>Time</label>
            <input type="text"  value={time} 
            required 
            onChange={(e)=>setTime(e.target.value)}/>
          </div>
          <div className="consultant-checkbox">
            <label>
                Consultant witness required?
            </label>
            <input type="checkbox" 
            checked={consultant}
            onChange={(e)=>setConsultant(e.target.checked)}/>
          </div>
          <button>Save Schedule</button>
        </form>
      </div>
    </div>
  );
}

export default NewSchedule;
