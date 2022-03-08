import React from 'react'
import { useState } from 'react';

const IsLoged = () => {

const [checkIf, setCheckIf] = useState('');

const check = async()=>{
    let email = localStorage.getItem("user");
    let cKey = localStorage.getItem("ckey");
    const checkKeyResponse = await fetch(`http://localhost:5000/user-status/${email}`)
    const jsonData = await checkKeyResponse.json();
    if(jsonData.length !==0){
        if(jsonData[0].ckey==cKey){
            setCheckIf(1)
            document.querySelectorAll(".nav-btn")[0].style.opacity = "1"
            document.querySelectorAll(".nav-btn")[1].style.opacity = "1"
        }
    }else{
        document.querySelectorAll(".nav-btn")[0].style.opacity = "1"
        document.querySelectorAll(".nav-btn")[1].style.opacity = "1"
        setCheckIf(0)
    }
}
check()

const logout = () =>{
    localStorage.clear()
}
    
    if(checkIf==1){
        return (<>
            <a href="/"><button className="btn btn-outline-success my-2 my-sm-0 ml-10 nav-btn" type="submit" onClick={logout}>Logout</button></a>
            <a href="profile"><button className="btn btn-success my-2 my-sm-0 ml-2 nav-btn" type="submit">Profile</button></a>
        </>
        )
    }else{
        return(<>
            <a href="register"><button className="btn btn-outline-success my-2 my-sm-0 ml-10 nav-btn" type="submit">Register</button></a>
            <a href="login"><button className="btn btn-success my-2 my-sm-0 ml-2 nav-btn" type="submit">Login</button></a>
        </>
        )
    }
}


export default IsLoged
