import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const Register = () => {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onSubmitForm = async e =>{
        e.preventDefault()

        console.log("asd")
        const checkNameResponse = await fetch(`http://localhost:5000/name-check/${uname}`)
        const jsonData1 = await checkNameResponse.json();
        if(jsonData1.length>0){
            document.querySelector("#name").style.display = "block";
            return 0; 
        }

        const checkEmailResponse = await fetch(`http://localhost:5000/email-check/${email}`)
        const jsonData2 = await checkEmailResponse.json();
        if(jsonData2.length>0){
            document.querySelector("#email").style.display = "block";
            return 0; 
        }

        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        let passCheck = pass.match(pattern)

        if(!passCheck){
            document.querySelector("#password").style.display = "block";
            return 0;
        }


        const body = { uname, email, pass }
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        document.querySelector("#name").style.display = "none";
        document.querySelector("#email").style.display = "none";
        document.querySelector("#password").style.display = "none";
        document.querySelector("#success").style.display = "block";
    }

  return (
    <>
    <div>
        <style></style>
    <div className='w-50 outer-login p-5 mt-10 qmt-10'>
        <div className='w-50 p-4 qw-100'>
            <h2>Register account</h2>
            <form className='mt-4' onSubmit={onSubmitForm}>
            <div className="form-group">
                <label >Username</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Username" onChange={e => setUname(e.target.value)} required/>
                <small id="name" className="form-text text-danger ">Username already in use</small>
            </div>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required/>
                <small id="email" className="form-text text-danger">Invalid email</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" onChange={e => setPass(e.target.value)} required/>
                <small id="password" className="form-text text-danger ">Password doesn't meet security requirements </small>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" >Check me out</label>
            </div>
                <input type="submit" value="Sign up" className="btn btn-success mt-3"/>
                <p id="success" className="form-text text-success ">Account created </p>
            </form>
        </div>
        <div className='w-50 bg-success d-flex justify-content-center align-items-center flex-column text-light qw-100 qp-5'>
            <h2 className='text-center'>Have an account?</h2>
            <p className='pt-2 text-center'>You have more features, when logged in </p>
            <a href="login"><button className='btn btn-light'>Log in</button></a>
        </div>
    </div>
    </div>
    <div className='bg bg-register'></div>
    </>
  )
  
}




export default Register
