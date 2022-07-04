/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import "./header.css"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import * as actionType from '../../../../common_components/constants/actionTypes';
import useStyles from './styles';


const Header = () => {
  const [click, setClick] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

    return (
        <>
            <header>
                <nav className="flexSB">
                    <div className='container flexSB' mx>
                        <div className='header__logo'>
                            <h1>Tech IndusOne</h1>
                            <span>IT SERVICES & IT CONSULTING</span>
                        </div>
                        <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                            <li aria-current="page" ><Link to='/home'>Prepare</Link></li>
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
                                            
                                                <Nav.Link eventKey="dashboard"><Link to="/dashboard">
                                                    <i className='fa fa-dashboard'></i> Dashboard</Link>
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="saved">
                                                    <Link to="/saved-questions"><i className="far fa-bookmark"></i>Saved</Link>
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="setting" href="#">
                                                    <i className="fa fa-gear fa-fw"></i> Settings
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Nav.Link eventKey="logout"><Link to="/">
                                                    <i className="fa fa-sign-out fa-fw"></i> Logout</Link>
                                                </Nav.Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <div className={classes.profile}>
                                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                                            {/* <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button> */}
                                        </div>
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