import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
//old code
//     <div className="navbar navbar-light bg-success">
//       <nav className="navbar navbar-expand-lg navbar-light bg-success">
//         <div className="container-fluid">
//           <Link className="navbar-brand fs-1 fst-italic" to="/">FoodCart</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className='d-flex justify-content-end d-inline-block'> 
// 
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2">
//               <li className="nav-item">
//                 <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
//             <Link className="btn bg-white text-success mx-1" to="/creatuser">SignUp</Link>
//           </div>
//           </div>
//         </div>
//       </nav>
//     </div>

<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky" style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/creatuser">Signup</Link>
                            </form> 
                            <div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
  )
}