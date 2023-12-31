import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setcredentials] = useState({ email: "", password: "" })
let navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault(); // synthetic event
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials");
        }
        if(json.success){
            localStorage.setItem("userEmail",credentials.email);
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/");
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
        <Navbar/>
        <div style={{backgroundImage: 'url("https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', height: '100vh', backgroundSize: 'cover'}}>
            
            <div className="container d-flex justify-content-center pt-5">
                <form onSubmit={handleSubmit}>
                    {
                        <h1 className='fw-bold'>SignIn</h1>
                    }
                    <div className="form-group fw-bold">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                        {/* <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group fw-bold">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-info fw-bold">Submit</button>
                    <Link to="/creatuser" className='m-3 btn btn-danger fw-bold'>New user?, SignUp</Link>
                    <div className='d-flex align-items-between'>
                    <Link to="/" className='m-3 w-25  btn btn-danger fw-bold'>Home</Link>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}
