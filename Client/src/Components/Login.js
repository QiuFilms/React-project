import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onSubmitForm = async e =>{
        e.preventDefault()

        const checkNameResponse = await fetch(`http://localhost:5000/login/${pass}/${email}`)
        const jsonData = await checkNameResponse.json();
        if(jsonData.length==0){
            document.querySelector("#name").style.display = "block";
            return 0; 
        }

        const d = new Date();
        let time = d.getTime().toString();
        let rand = Math.ceil(Math.random()*100)
        let ckey = `#`+time.slice(0,7)*rand
        try {   
            const body = { email, ckey }
            const response = await fetch("http://localhost:5000/user-status", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error.message)
        }
        localStorage.setItem('user', email);
        localStorage.setItem('ckey', ckey);
        window.location.assign("home")
    }

  return (
    <>
    <div className='w-50 outer-login p-5 mt-10 qmt-10'>
        <div className='w-50 p-4 qw-100'>
            <h2>Login to your account</h2>
            <form className='mt-4' onSubmit={onSubmitForm}>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required/>
                <small id="name" className="form-text text-danger ">Invalid email or password</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" onChange={e => setPass(e.target.value)} required/>
                <small id="emailHelp" className="form-text text-danger "></small>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" >Check me out</label>
            </div>
            <input type="submit" value="Log in" className="btn btn-success mt-3" />
            </form>
        </div>
        <div className='w-50 bg-success d-flex justify-content-center align-items-center flex-column text-light qw-100 qp-5'>
            <h2 className='text-center'>Don't have an account?</h2>
            <p className='pt-2 text-center'>Account give you many new features</p>
            <a href="register"><button className='btn btn-light'>Sign up</button></a>
        </div>
    </div>
    <div className='bg bg-login'></div>
    </>
  )
}

export default Login;
