import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navigation.css";

function Navigation() {
  return (
    <Container className="custom-styled-wrapper">
      <Navbar className="nav-container">
        <Container>
          <Navbar.Brand className="brand-name" href="#home">
            <Nav.Link>
              <Link className="nav-links" to="/">
                Christine Schale
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-links" to="/About">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-links" to="/Blogs">
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-links" to="/Projects">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-links" to="/Contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
