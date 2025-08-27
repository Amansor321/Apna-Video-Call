import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'


const landing = () => {
  const router=  useNavigate();
  return (
  
    <div className='landingpagecontainer' >
        
        <nav>
            <div className='navheader' >
                <h2>Apna Video Call</h2>
            </div>
            <div className='navlist' >
                <p onClick={()=>{
                 router("/hbh")
                }} >Join as Guest</p>
                <p onClick={()=>{
                  router("/auth")
                }} >Register</p>
                <button onClick={()=>{
                  router("/auth")
                }} >Login</button>
            </div>
        </nav>

        <div className="landingmaincontainer">
            <div>
<h1> <span style={{color : "#ff9839"}} ></span> Connect with your loved ones</h1>
<p>Cover a distance by Apna Video Call </p>
<div role='button' >
  <Link to={"/auth"} >Get Started</Link>
</div>

            </div>
            <div>
<img src='/mobile.png' alt=''/>
            </div>
        </div>
   
    </div>
  )
}

export default landing;
