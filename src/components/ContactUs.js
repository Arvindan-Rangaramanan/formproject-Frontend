import React, { useRef, useState } from 'react';
import axios from 'axios';
import './ContactUs.css';
import { Link } from 'react-router-dom';

export default function ContactUs(){

  const form=useRef(null)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  
  const onSubmit = () => {
    const body = {name, email, message}

    axios.post('http://localhost:5000/user', body)
    .then(goyya => {
      alert(goyya.data.message) 
    })
  }

  return (
    <div className="form">
      <h1>GET IN TOUCH WITH US</h1>
    <form>
      <div>
      <input placeholder="NAME" type="text" name="user_name" className="input-box" onChange={(evt) => setName(evt.target.value)} />
      </div>
      <div>   
      <input placeholder="EMAIL" type="email" name="user_email" className="input-box" onChange={(evt) => setEmail(evt.target.value)} /></div>
      <div>
      <textarea placeholder="TELL US MORE" name="message" className="input-box1" onChange={(evt) => setMessage(evt.target.value)} />
      </div>
      <Link exact to="/Thankyou">
      <input className="button " type="submit" value="Send" onClick={onSubmit} />
      </Link>
      </form>
      </div>
  );
  };