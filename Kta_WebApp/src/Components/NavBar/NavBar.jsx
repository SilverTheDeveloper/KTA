// import { useEffect, useRef, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import ktaLogo from "/assets/LandingPage/KtaIcon.png";
// import "./NavBar.scss";
// import { Link, useLocation } from "react-router-dom";

// function NavBar() {
//   const location = useLocation();
//   const isAboutPage = location.pathname.includes("/app/about");
//   const [expanded, setExpanded] = useState(false);
//   const navRef = useRef();

//   // Collapse navbar on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setExpanded(false);
//       }
//     };

//     const handleScroll = () => setExpanded(false);

//     document.addEventListener("mousedown", handleClickOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <Navbar
//       expand="lg"
//       ref={navRef}
//       expanded={expanded}
//       className={`bg-body-white px-4 ${isAboutPage ? "aboutPagesStyles" : ""}`}
//     >
//       <Container fluid>
//         <Navbar.Brand as={Link} to="/">
//           <img id="KTAlogo" src={ktaLogo} width={100} alt="KTA" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" onClick={() => setExpanded(!expanded)} />
//         <Navbar.Collapse id="navbarScroll" className="mobile-navbar">
//           <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
//             {[
//               { path: "/app/about", label: "About" },
//               { path: "/app/products", label: "Product" },
//               { path: "/app/downloads", label: "Download" },
//               { path: "/app/blogs", label: "Blog" },
//               { path: "/app/calculator", label: "Calculators" },
//               { path: "/app/careers", label: "Careers" },
//               { path: "/app/contact", label: "Contact" }
//             ].map(({ path, label }) => (
//               <Nav.Link
//                 key={path}
//                 as={Link}
//                 to={path}
//                 className={`${isAboutPage ? "navLinkWhite" : "navLink"} ${label === "Contact" ? "contactButton" : ""}`}
//                 onClick={() => setExpanded(false)}
//               >
//                 {label}
//               </Nav.Link>
//             ))}
//           </Nav>
//           <div id="demo-2">
//             <input type="search" placeholder="Product Search..." />
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;


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

  const products = [
    "KTA 1000",
    "KTA 2000",
    "KTA 3000",
    "KTA 4000",
    "KTA 5000",
    "KTA 6000",
    "KTA 7000",
    "KTA 8000",
    "KTA Polymer Grout",
    "KTA Epoxy",
    "KTA Admix Plus",
    "KTA Glitter",
    "KTA Tile Spacer",
    "KTA Levelling Tool",
    "KTA Notch Trowel",
    "KTA Grout Spreader",
    "KTA Tile Vaccum",
    "KTA Tile Jack",
    "KTA Tile Plier",
    "KTA Tile Cleaner (Acidic)",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

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
                className={`${isAboutPage ? "navLinkWhite" : "navLink"} ${label === "Contact" ? "contactButton" : ""
                  }`}
                onClick={() => setExpanded(false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Search Bar with Suggestions
          <div id="demo-2" className="searchWrapper">
            <input
              type="search"
              placeholder="Product Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onBlur={() => setTimeout(() => setFilteredProducts([]), 200)}
            />
            {filteredProducts.length > 0 && (
              <ul className="searchSuggestions">
                {filteredProducts.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSearchQuery(item);
                      setFilteredProducts([]);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div> */}

          {/* Search Bar with Suggestions and Custom Clear Button */}
          <div id="demo-2" className="searchWrapper">
            <input
              type="search"
              className="customSearchInput"
              placeholder="Product Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onBlur={() => {
                setTimeout(() => {
                  setFilteredProducts([]);
                  if (!searchQuery) setSearchQuery("");
                }, 200);
              }}

            />
            {searchQuery && (
              <span className="customClearBtn" onClick={() => setSearchQuery("")}>
                ×
              </span>
            )}
            {filteredProducts.length > 0 && (
              <ul className="searchSuggestions">
                {filteredProducts.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setExpanded(!expanded);
                      setSearchQuery(""); // ← Clears query when nav is toggled
                      setFilteredProducts([]); // ← Hide suggestions too
                    }}

                  >
                    {item}
                  </li>
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
