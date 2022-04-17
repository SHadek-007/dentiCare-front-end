import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import './Header.css';
import logo from '../../../images/denticare-logo.png';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  };

  return (
    <>
      <Navbar className="header-style" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><img style={{height:'50px'}} className="w-100" src={logo} alt="Red Onion Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link className="nav-style text-dark me-4" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="nav-style text-dark me-4" as={Link} to="blogs">Blogs</Nav.Link>
            <Nav.Link className="nav-style text-dark me-4" as={Link} to="about">About</Nav.Link>
              {user ? <button className="btn btn-link text-decoration-none text-dark nav-style" onClick={handleSignOut}>Sign Out</button> :<Nav.Link className="nav-style text-dark me-4" as={Link} to="signin">Sign In</Nav.Link>}
              <Nav.Link className="nav-style text-dark me-4" as={Link} to="signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

