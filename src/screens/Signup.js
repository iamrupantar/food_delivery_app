import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    let navigate = useNavigate()

    let [address, setAddress] = useState("");
    const handleClick = async (e) => {
        e.preventDefault();
        let navLocation = () => {
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej);
            });
        }
        let latlong = await navLocation().then(res => {
            let latitude = res.coords.latitude;
            let longitude = res.coords.longitude;
            return [latitude, longitude]
        })
        // console.log(latlong)
        let [lat, long] = latlong
        console.log(lat, long)
        const response = await fetch("http://localhost:5000/api/getlocation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ latlong: { lat, long } })

        });
        const { location } = await response.json()
        console.log(location);
        setAddress(location);
        setcredentials({ ...credentials, [e.target.name]: location })
    }


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
        else {
            alert("Success! UserID Created")
            navigate("/login");
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div><Navbar /></div>

            <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/6089654/pexels-photo-6089654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', height: '100vh', backgroundSize: 'cover' }}>
                <div className="container d-flex justify-content-center fw-bold pt-5">
                    <form onSubmit={handleSubmit}>
                        {
                            <h1>SignUP</h1>
                        }
                        <div className="form-group fw-bold">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" name='name' value={credentials.name} onChange={onChange} />
                        </div>

                        <div className="form-group fw-bold">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group fw-bold ">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                        </div>
                        {/* <div className="form-group fw-bold">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress1" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                    </div> */}
                        <div>
                            <label htmlFor="address" className="form-label">Address</label>
                            <fieldset>
                                <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e) => setAddress(e.target.value)} aria-describedby="emailHelp" />
                            </fieldset>
                        </div>
                        <div className="m-3">
                            <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
                        </div>
                        <button type="submit" className="m-3 btn btn-info fw-bold">Submit</button>
                        <Link to="/login" className='m-3 btn btn-danger fw-bold'>Already a user</Link>
                    </form>
                </div>
            </div>
        </>
    )
}
