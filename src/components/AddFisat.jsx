import React, { useState } from 'react'
import NavFisat from './NavFisat'
import axios from 'axios'

const AddFisat = () => {
    const[data,setData]=useState(
        { 
          
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully addedd")
                
                    
                } else {
                    alert("error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavFisat/>
       <br>
        </br>
        <center><h1>ADD STUDENT</h1></center>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">First Name</label>
                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">College</label>
                    <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DOB</label>
                    <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Course</label>
                <select className="form-control" name='course' value={data.course} onChange={inputHandler}>
                        <option value=""></option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="B-Tech">B-Tech</option>
                        <option value="M-Tech">M-Tech</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">mobile</label>
                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Address</label>
                    <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <button className="btn btn-success"onClick={readValue}>Submit</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AddFisat