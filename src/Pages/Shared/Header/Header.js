import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        TRAVELLE</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>


                        <Nav.Link as={HashLink} to="/home#activity">Activity</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#discover">Discover</Nav.Link>

                        {
                            user?.email ?

                                <NavDropdown title={user?.displayName} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/manageAllOrders">ManageAllOrders</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/myOrders">MyOrders</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addservice">ADD Service</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
                                </NavDropdown> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;