import React from 'react';
import './Homepage.css'
import {BrowserRouter as Router, Route , Link , Switch } from "react-router-dom";
import ContactUS from './ContactUs';

function Homepage() {
  return (
    <div className="body">

      {/* header area*/ } 

      <header>
        <div class="brand-logo" href="#">
            <img className="logo-img" src = {require('../imgs/logo.png').default} alt="nyx logo" />
        </div>
      </header>

      {/* Title */}

    <div className="title-area">  
      <div className="welcome-text">
        <h2>WELCOME TO</h2>
      </div>
      <div className="company-name">
        <h1>NYX WOLVES</h1>
      </div>
    </div>

      {/** BUTTON */}
      
    <div className="button-area">
      <button type="submit"> <Link style={{textTransform:'none'}} exact to="/ContactUS" >
        LET US WORK TOGETHER !
      </Link>
      </button>
    </div>
    
    </div> 
   
  );
  }

   
  


export default Homepage;
