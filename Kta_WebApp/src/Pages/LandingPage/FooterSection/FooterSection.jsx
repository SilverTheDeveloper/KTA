import React from "react";
import styles from "./FooterSection.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

import ktaIcon from "/assets/LandingPage/KtaIcon.png";
import { Link } from "react-router-dom";
const FooterSection = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

const callNumber = (phoneNumber) => {
  if (!phoneNumber) return;
  window.location.href = `tel:${phoneNumber}`;
}

const handleMailClick = () => {
  window.location.href = "mailto:info@ktasolutions.in";
};

const handleAddressClick = () => {
  const address = "KTA Solutions | Sobhraj Developments Private Limited, Nasirabad Road, near Kumawat Petrol Pump, Mangliyawas, Arjunpura Jageer, Rajasthan 305023";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  window.open(mapUrl, "_blank"); // Opens Google Maps in new tab
};
  return (
    <div className={styles.FooterSection}>
      <div className={styles.RightTopSection}>
        <a
          href="https://www.facebook.com/people/KTA-Solutions/61556809331930/#"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className={styles.facebookIcon}></div>
        </a>
        <a
          href="https://www.instagram.com/kta.solutions/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className={styles.instagramIcon}></div>
        </a>

        <a
          href="https://wa.me/918233602899"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className={styles.whatsappIcon}></div>
        </a>
      </div>
      <div className={styles.LeftSection}>
        <div className={styles.Logo}>
          <img src={ktaIcon} alt="" />
        </div>
        <div className={styles.Copyright}>
          © 2025 KTA SOLUTIONS 
          <br />
          A COMPLETE TILE FIXING SOLUTION.
          <br />
          ALL RIGHTS RESERVED.  
          <br />
          MANUFACTURED AND MARKETED BY 
          <br />
          SOBHRAJ DEVELOPMENTS PRIVATE LIMITED

        </div>
      </div>
      <div className={styles.RightSection}>
        <div className={styles.List}>
          <span className={styles.Title}>Useful links</span>
          <span>
            <Link to={"/app/about"} style={linkStyle}>
              About Us
            </Link>
          </span>
          <span>
            <Link to={"/app/products"} style={linkStyle}>
              Product
            </Link>
          </span>
          <span>
            <Link to={"/app/blogs"} style={linkStyle}>
              Blogs
            </Link>
          </span>
          <span>
            <Link to={"/app/careers"} style={linkStyle}>
              Careers
            </Link>
          </span>
        </div>
        <div className={styles.List}>
          <span className={styles.Title}>Useful links</span>
          <span>
            <a>Terms & Conditions</a>
          </span>
          <span>
            <a>Privacy Policy</a>
          </span>
          <span>
            <a>Shipping & Returns</a>
          </span>
          <span>
            <Link to={"/app/contact"} style={linkStyle}>
              Contact
            </Link>
          </span>
        </div>
        <div className={styles.ContactUs}>
          <span className={styles.Title}>Contact Us</span>
          <span onClick={handleMailClick}>
            <MdMailOutline size={"20px"} />
            info@ktasolutions.in
          </span>
          <span onClick={() => callNumber("+919414009900")}>
            <BsTelephone size={"20px"} />
            +91 94140-09900
          </span>
          <span onClick={handleAddressClick}>
            <IoLocationOutline size={"20px"} />
            <p>
             KTA Solutions| Mangliawas - Nasirabad Road, Ajmer - 305203 Rajasthan,
              India.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
