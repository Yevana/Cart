import React from 'react'
import './utilities.css';
import logo from '../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-dark'>
            <div className="container py-3 pb-5">
                <div className='row align-items-center'>
                    <div className="col-md-4">
                        <h1 className='display-6 text-white mb-4 head_font'>Join Our Community</h1>

                        <form className='mb-4 pb-md-1'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control form_input border-bottom border-0 rounded-0 text-white" placeholder="Youremail@example.com" aria-label="Youremail@example.com" aria-describedby="button-addon2" />
                                <button className="btn text-white border-bottom border-0 rounded-0" type="button" id="button-addon2">SIGN UP</button>
                            </div>
                        </form>
                        <div className='mb-4'>
                            <img src={logo} width="160px" height="auto" />
                        </div>
                        <div className='d-flex'>
                            <div><i className="bi bi-instagram text-white fs-5"></i></div>
                            <div className='ms-4'><i className="bi bi-facebook text-white fs-5"></i></div>
                            <div className='ms-4'><i className="bi bi-youtube text-white fs-5"></i></div>
                        </div>
                    </div>
                    <div className="col-md-3 offset-5">
                        <div className='d-flex justify-content-between'>
                        <ul className="list-unstyled">
                            <li className='mb-2'><Link to="/" className='text-white text-decoration-none'>Home</Link></li>
                            <li className='mb-2'><Link to="/about" className='text-white text-decoration-none'>About Us</Link></li>
                            <li className='mb-2'><Link to="/shop" className='text-white text-decoration-none'>Shop</Link></li>
                            <li className='mb-2'><Link to="/" className='text-white text-decoration-none'>Category</Link></li>
                        </ul>

                        <ul className="list-unstyled">
                            <li className='mb-2'><Link to="/contact" className='text-white text-decoration-none'>Contact</Link></li>
                            <li className='mb-2'><Link to="/terms" className='text-white text-decoration-none'>Terms and condition</Link></li>
                            <li className='mb-2'><Link to="/" className='text-white text-decoration-none'>Privacy Policy</Link></li>
                        </ul>
                        </div>
                        
                    </div>
                    <div className="col-md-2">
                    
                    </div>
                </div>
            </div>
        </footer>
    )
}




export default Footer