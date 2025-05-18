import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ktaLogo from "/assets/LandingPage/KtaIcon.png";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isAboutPage = location.pathname.includes("/app/about")
  // const aboutPageStyles = {
  //     background: "transparent",
  //     position: "absolute",
  //     width: "100%"   
  // }


  return (
    // <Navbar expand="lg" className="bg-body-white px-4" style={isAboutPage ? aboutPageStyles : {}}>
    <Navbar
    expand="lg"
    className={`bg-body-white px-4 ${isAboutPage ? "aboutPagesStyles" : ""}`}
  >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img id="KTAlogo" src={ktaLogo} width={"100"} alt="KTA" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll" className="mobile-navbar">
          <Nav className={`ms-auto my-2 my-lg-0 `} navbarScroll>
            <Nav.Link className={`${isAboutPage ? "navLinkWhite" : "navLink"}`} as={Link} to="/app/about">About</Nav.Link>
            <Nav.Link className={`${isAboutPage ? "navLinkWhite" : "navLink"}`} as={Link} to="/app/about">Product</Nav.Link>
            
            <Nav.Link className={`${isAboutPage ? "navLinkWhite" : "navLink"}`} as={Link} to="/app/downloads">Download</Nav.Link>
            <Nav.Link className={`${isAboutPage ? "navLinkWhite" : "navLink"}`} as={Link} to="/app/blogs">Blog</Nav.Link>
            <Nav.Link className={`${isAboutPage ? "navLinkWhite" : "navLink"}`} as={Link} to="/app/calculator">Calculators</Nav.Link>
            <Nav.Link className={`${isAboutPage ? "navLinkWhite" : "navLink"}`} as={Link} to="/app/careers">Careers</Nav.Link>
            <Nav.Link  as={Link} to="/app/contact" className="contactButton">Contact</Nav.Link>
          </Nav>

          <div id="demo-2">
            <input type="search" placeholder="Product Search..." />
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
