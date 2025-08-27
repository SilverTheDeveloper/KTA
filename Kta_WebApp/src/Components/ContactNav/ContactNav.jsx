import React from "react";
import styles from "./ContactNav.module.scss";
import contactIcon from "/assets/LandingPage/contactIcon.svg";
import mailIcon from "/assets/LandingPage/mailIcon.svg";

const callNumber = (phoneNumber) => {
  if (!phoneNumber) return;
  window.location.href = `tel:${phoneNumber}`;
}

const handleMailClick = () => {
  window.location.href = "mailto:info@ktasolutions.in";
};



function ContactNav() {
  return (
    <div className={styles.ContactNav}>
      <div onClick={() => callNumber("+919414009900")} >
        <img src={contactIcon} /> +91 94140-09900{" "}
      </div>
      <div  onClick={handleMailClick}>
        <img src={mailIcon} className="px-1" /> info@ktasolutions.in
      </div>
    </div>
  );
}

export default ContactNav;
