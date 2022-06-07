import React, { useState } from "react"
import { Link } from "react-router-dom"
/*import search from "./search"*/
import Head from "./Head"
import "./header.css"
import { Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const [click, setClick] = useState(false)

    return (
        <>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                        <li><Link to='/'>Prepare</Link></li>
                        <li><Link to='/Certify'>Certify</Link></li>
                        <li><Link to='/compete'>Compete</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div className='start'>
                        <div className='button'>
                            <search />
                            
                            
                            <NavDropdown title={<div style={{display: "inline-block"}}><i className='fa fa-user icon'/></div>} id="nav-dropdown">
                                <NavDropdown.Item>
                                    <Nav.Link eventKey="account" href="#home">
                                    <i className="fa fa-user fa-fw"></i> My Account
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link eventKey="dashboard" href="#">
                                    <i class='fa fa-dashboard'></i> Dashboard
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
