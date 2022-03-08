import React from 'react'
import {useState} from 'react'


const Form = () => {
    
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');

    const onSubmitForm = async e =>{
        e.preventDefault()
        try {   
            const body = { taskName, taskDate }
            const response = await fetch("http://localhost:5000/task", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className="form-group center w-25">
        <form>
            <label>Task name</label>
            <div className="d-flex">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add task name" onChange={e => setTaskName(e.target.value)}/>
            </div>
            <small id="emailHelp" className="form-text text-muted">You can add the same names of tasks</small>
            <label className="mt-3">Task date</label>
            <div className="d-flex">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add task date " onChange={e => setTaskDate(e.target.value)}/>
            </div>
            <small id="emailHelp" className="form-text text-muted">Date format: DD Month YYYY</small>
            <input type="submit" value="Add" className="btn btn-success w-100 mt-3"/>
        </form>
    </div>
  )
}

export default Form
