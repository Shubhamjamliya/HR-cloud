import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import logo from '../assets/logo.png';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Close mobile menu & scroll to top on route change
  useEffect(() => {
    setExpanded(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      expanded={expanded}
      className="shadow-sm py-3 bg-gray-900"
    >
      <Container className="flex justify-between items-center">
        <Navbar.Brand href="/" className="fw-bold text-white flex items-center gap-2">
          <img src={logo} alt="HR Cloud Logo" className="w-20 h-auto" />
          <span className="hidden sm:inline">HR Cloud</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0"
          onClick={() => setExpanded((prev) => !prev)}
        />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-center">
          <Nav className="mx-auto d-flex align-items-center gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' },
              { name: 'About', path: '/about' },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `no-underline text-white px-3 pb-1 border-b-2 transition-all duration-300 ${isActive ? 'border-white' : 'border-transparent hover:border-white'
                  }`
                }
                style={{ textDecoration: 'none' }}
              >
                {item.name}
              </NavLink>
            ))}
          </Nav>

          <Nav className="d-flex align-items-center ms-auto">
            <Nav.Link
              href="/login"
              className="text-white px-2 d-flex align-items-center"
              onClick={() => setExpanded(false)}
            >
              <FaSignInAlt className="me-1" /> Login
            </Nav.Link>
            <Nav.Link
              href="/signup"
              className="text-white px-2 d-flex align-items-center"
              onClick={() => setExpanded(false)}
            >
              <FaUserPlus className="me-1" /> Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
