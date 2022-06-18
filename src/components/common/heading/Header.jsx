import React, { useState } from "react"
import { Link } from "react-router-dom"
/*import search from "./search"*/
/*import Head from "./Head"*/
import "./header.css"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const [click, setClick] = useState(false)

    return (
        <>

            <header>
                <nav className="flexSB">
                    <div className='container flexSB' mx>
                        <div className='logo'>
                            <h1>Tech IndusOne</h1>
                            <span>IT SERVICES & IT CONSULTING</span>
                        </div>
                        <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                            <li aria-current="page" ><Link to='/'>Prepare</Link></li>
                            <li><Link to='/certify'>Certify</Link></li>
                            <li><Link to='/compete'>Compete</Link></li>


                            
                        </ul>
                    </div>

                    <div className='start'>
                        <div className='button'>
                            <Navbar>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav>
                                        <form className="d-flex" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-dark" type="submit"><i class="fa fa-search"></i></button>
                                        </form>
                                        <NavDropdown title={<div style={{ display: "inline-block" }}><i className='fa fa-bell icon' /></div>} id="nav-dropdown">
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="news1" href="#home">
                                                    Some News
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="news2" href="#">
                                                    Other News
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="news2" href="#">
                                                    Something else here
                                                </Nav.Link>
                                            </NavDropdown.Item>

                                        </NavDropdown><NavDropdown title={<div style={{ display: "inline-block" }}><i className='fa fa-user icon' /></div>} id="nav-dropdown">
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="account" href="#home">
                                                    <i className="fa fa-user fa-fw"></i> My Account
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="dashboard" href="#">
                                                    <i className='fa fa-dashboard'></i> Dashboard
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="setting" href="#">
                                                    <i className="fa fa-gear fa-fw"></i> Settings
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="logout" href="#">
                                                    <i className="fa fa-sign-out fa-fw"></i> Logout
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>

                            </Navbar>



                        </div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header