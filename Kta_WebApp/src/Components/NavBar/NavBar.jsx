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
import axios from "axios";
import { API } from "@/constants";

function NavBar() {
  const location = useLocation();
  const isAboutPage = location.pathname.includes("/app/about");
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilteredProducts, setShowFilteredProducts] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
      setShowFilteredProducts(false);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setShowFilteredProducts(true);
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    const handleScroll = () => setExpanded(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API}/api/product/getall`);
        const simplifiedProducts = response.data.map((product) => ({
          id: product._id,
          name: product.name,
          img: product.img,
        }));
        setProducts(simplifiedProducts);
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.message || "Failed to fetch products.");
      }
    };

    fetchProducts();

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
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="custom-toggler"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbarScroll" className="mobile-navbar">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            {[
              { path: "/app/about", label: "About" },
              { path: "/app/products", label: "Product" },
              { path: "/app/downloads", label: "Download" },
              { path: "/app/blogs", label: "Blog" },
              { path: "/app/calculator", label: "Calculators" },
              { path: "/app/careers", label: "Careers" },
              { path: "/app/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                className={`${isAboutPage ? "navLinkWhite" : "navLink"} ${
                  label === "Contact" ? "contactButton" : ""
                }`}
                onClick={() => setExpanded(false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <div id="demo-2" className="searchWrapper">
            <input
              type="search"
              className="customSearchInput"
              placeholder="Product Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              // onBlur={() => {
              //   setFilteredProducts([]);
              //   if (!searchQuery) setSearchQuery("");
              // }}
            />
            {searchQuery && (
              <span
                className="customClearBtn"
                onClick={() => {
                  setSearchQuery("");
                  setFilteredProducts([]);
                }}
              >
                ×
              </span>
            )}
            {filteredProducts.length > 0 && showFilteredProducts && (
              <ul className="searchSuggestions">
                {filteredProducts.map((item) => (
                  <Link
                    to={`/app/product/${item.id}`}
                    className="product-search-link"
                    onClick={() => {
                      setShowFilteredProducts(false);
                    }}
                  >
                    <li key={item.id}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="searchImg"
                        width={30}
                        height={30}
                      />
                      <span>{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
