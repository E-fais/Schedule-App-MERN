import './CreateSchedule.css'
function CreateSchedule() {
  return (
    <div className="create-schedule-container">
        <form>
      <div className="schedule-container">
        <div>

        <input type="text" placeholder="Sample Id" />
        </div>
        <div className="witness">
        <p> Type of sample</p>
          <label> 
            <input type="radio" name="sample" /> Aggregate
          </label>
          <label>
            <input type="radio" name="sample" />Chemical
          </label>
        </div>
        <label> Consultant witness?
        <input type="checkbox"  />
        </label>
        <button type="submit">Submit</button>
      </div>
        </form>
    </div>
  );
}

export default CreateSchedule;
