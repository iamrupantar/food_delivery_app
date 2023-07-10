import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'

export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault(); // synthetic event
        const response = await fetch("http://localhost:5000/api/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json()
        console.log(json);

        const isSuccess = json.success

        if (!isSuccess) {
            alert("Enter valid credentials")
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    {
                        <h1>SignUP</h1>
                    }
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" name='name' value={credentials.name} onChange={onChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress1" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}
