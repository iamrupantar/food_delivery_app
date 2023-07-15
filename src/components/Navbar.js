import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';

import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';


export default function Navbar() {
    let data = useCart();
    const [cartView, setCartView] = useState(false)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info position-sticky" style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic " style={{ 'font-family': 'Leckerli One' }} to="/">FoodCart</Link>
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
                                    <Link className="nav-link fs-5 mx-3 fw-bold active" aria-current="page" to="/myOrderData">My Orders</Link>
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
                                    <div className='btn bg-white text-info mx-1 fw-bold' onClick={() => { setCartView(true) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        {" "}My Cart{" "}
                                        <Badge className='m-1' pill bg="danger">{data.length}</Badge>
                                    </div>
                                    {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
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