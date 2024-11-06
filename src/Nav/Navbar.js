import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './components/Navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  // State to handle hover effect for each link
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isBrandHovered, setBrandHovered] = useState(false); // State for Navbar.Brand hover

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Base and hover styles
  const navLinkBaseStyle = {
    color: '#e0e0e0', // Lighter color for readability
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'color 0.3s ease, background-color 0.3s ease, transform 0.3s ease'
  };

  const navLinkHoverStyle = {
    color: '#222', // Darker color on hover
    backgroundColor: '#76c7d2', // Light background on hover
    fontWeight: 'bold',
    transform: 'scale(1.05)'
  };

  const brandStyle = {
    color: isBrandHovered ? '#76c7d2' : '#f5f5f5', // Lighter color on hover
    fontSize: '1.6rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease'
  };

  // Combined style based on hover state
  const getNavLinkStyle = (link) => (
    hoveredLink === link ? { ...navLinkBaseStyle, ...navLinkHoverStyle } : navLinkBaseStyle
  );

  return (
    <Navbar bg="dark" expand="lg" className="sticky-top custom-navbar">
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={brandStyle}
          onMouseEnter={() => setBrandHovered(true)}
          onMouseLeave={() => setBrandHovered(false)}
        >
          Recipe Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
              style={getNavLinkStyle('home')}
              onMouseEnter={() => setHoveredLink('home')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/search"
              style={getNavLinkStyle('search')}
              onMouseEnter={() => setHoveredLink('search')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Search
            </Nav.Link>
            <Nav.Link
              href="/login"
              style={getNavLinkStyle('login')}
              onMouseEnter={() => setHoveredLink('login')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Login
            </Nav.Link>
            <Nav.Link
              href="/signup"
              style={getNavLinkStyle('signup')}
              onMouseEnter={() => setHoveredLink('signup')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Signup
            </Nav.Link>
            <Nav.Link
              href="/admin"
              style={getNavLinkStyle('admin')}
              onMouseEnter={() => setHoveredLink('admin')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Admin
            </Nav.Link>
            <button onClick={handleLogout} className="btn btn-logout">
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
