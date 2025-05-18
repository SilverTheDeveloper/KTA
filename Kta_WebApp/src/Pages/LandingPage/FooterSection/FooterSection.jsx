import React from "react";
import styles from "./FooterSection.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

import ktaIcon from "@/assets/LandingPage/KtaIcon.png";
import { Container } from "react-bootstrap";
const FooterSection = () => {
  return (
    <Container style={{ maxWidth: "1440px" }}>
      <div className={styles.FooterSection}>
        <div className={styles.RightTopSection}>
          <div className={styles.facebookIcon}>
          </div>
          <div className={styles.instagramIcon} >
          </div>
          <div className={styles.whatsappIcon}>
          </div>
        </div>
        <div className={styles.LeftSection}>
          <div className={styles.Logo}>
            <img src={ktaIcon} alt="" />
          </div>
          <div className={styles.Copyright}>
            © Copyright KTA Solutions. All Rights Reserved Mfd. and Marketed by
            <br />
            SOBHRAJ DEVELOPMENTS PVT. LTD.
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.List}>
            <span className={styles.Title}>Useful links</span>
            <span>
              <a>About Us</a>
            </span>
            <span>
              <a>Product</a>
            </span>
            <span>
              <a>Blogs</a>
            </span>
            <span>
              <a>Careers</a>
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
              <a>Contact</a>
            </span>
          </div>
          <div className={styles.ContactUs}>
            <span className={styles.Title}>Contact Us</span>
            <span>
              <MdMailOutline size={"20px"} />
              info@ktasolutions.in
            </span>
            <span>
              <BsTelephone size={"20px"} />
              +91 94140-09900
            </span>
            <span>
              <IoLocationOutline size={"20px"} />
              <p>
                Mangliawas - Nasirabad Road Mangliawas, Ajmer - 305203
                Rajasthan, India.
              </p>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterSection;
