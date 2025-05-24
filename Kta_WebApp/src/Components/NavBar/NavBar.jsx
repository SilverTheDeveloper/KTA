import { useEffect, useRef, useState } from "react";
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
  const isAboutPage = location.pathname.includes("/app/about");
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef();

  // Collapse navbar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    const handleScroll = () => setExpanded(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      ref={navRef}
      expanded={expanded}
      className={`bg-body-white px-4 ${isAboutPage ? "aboutPagesStyles" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img id="KTAlogo" src={ktaLogo} width={100} alt="KTA" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbarScroll" className="mobile-navbar">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            {[
              { path: "/app/about", label: "About" },
              { path: "/app/products", label: "Product" },
              { path: "/app/downloads", label: "Download" },
              { path: "/app/blogs", label: "Blog" },
              { path: "/app/calculator", label: "Calculators" },
              { path: "/app/careers", label: "Careers" },
              { path: "/app/contact", label: "Contact" }
            ].map(({ path, label }) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                className={`${isAboutPage ? "navLinkWhite" : "navLink"} ${label === "Contact" ? "contactButton" : ""}`}
                onClick={() => setExpanded(false)}
              >
                {label}
              </Nav.Link>
            ))}
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
