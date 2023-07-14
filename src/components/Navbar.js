import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info position-sticky" style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic " style={{'font-family': 'Leckerli One'}} to="/">FoodCart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 fw-bold active" aria-current="page" to="/">My Orders</Link>
                                </li>
                                : ""
                            }
                        </ul>
                        <div>
                            {(!localStorage.getItem("authToken")) ?
                                <form className="d-flex">
                                    <Link className="btn bg-white text-info mx-1 fw-bold" to="/login">Login</Link>
                                    <Link className="btn bg-white text-info mx-1 fw-bold" to="/creatuser">Signup</Link>
                                </form>
                                :

                                <div>
                                    <div className='btn bg-white text-info mx-1 fw-bold'>
                                        My Cart{" "}
                                        <Badge className='m-1' pill bg="danger">2</Badge>
                                    </div>
                                    <div className='btn bg-white text-danger mx-1 fw-bold' onClick={handleLogout}>
                                        LogOut
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}