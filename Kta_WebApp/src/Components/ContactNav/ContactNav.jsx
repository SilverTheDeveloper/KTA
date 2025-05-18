import React from "react";
import styles from "./ContactNav.module.scss";
import contactIcon from "/assets/LandingPage/contactIcon.svg";
import mailIcon from "/assets/LandingPage/mailIcon.svg";
function ContactNav() {
  return (
    <div className={styles.ContactNav}>
      <div>
        <img src={contactIcon} /> +91 94140-09900{" "}
      </div>
      <div>
        <img src={mailIcon} className="px-1" /> info@ktasolutions.in
      </div>
    </div>
  );
}

export default ContactNav;
