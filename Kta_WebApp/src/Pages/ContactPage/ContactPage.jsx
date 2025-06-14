import React, { useState } from "react";
import styles from "./ContactPage.module.scss";
import TopBanner from "@/Components/TopBanner/TopBanner";
import ContactTopBanner from "/assets/ContactPage/ContactTopBanner.png";
import Hours from "/assets/ContactPage/Hours.svg";
import Call from "/assets/ContactPage/Call.svg";
import Location from "/assets/ContactPage/Location.svg";
import Mail from "/assets/ContactPage/Mail.svg";
import { Oval } from "react-loader-spinner";
import { API } from "@/constants";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    BusinessType: "B2B",
    email: "",
    mobileNo: "",
    Product: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        `${API}/api/contact/sendEmail`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          BusinessType: "B2B",
          email: "",
          mobileNo: "",
          Product: "",
          message: "",
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("Failed to send email");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div id={styles.contactPageDesk}>
        <TopBanner
          head={ContactTopBanner}
          highlight={"We’re Here to Help!"}
          details={"Have questions? Need expert advice? Reach out to us!"}
        />

        <div className={styles.contactSection}>
          <div className={styles.contactLeftSection}>
            <div className={styles.contactLeftSectionBlock}>
              <div className={styles.contactLeftSectionHeading}>Our Office</div>
              <div className={styles.contactLeftSectionSubBlock}>
                <div className={styles.contactLeftSectionSubBlockHeading}>
                  <img src={Location} alt="" />
                  KTA Solutions Headquarters
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Mangliawas - Nasirabad Road Mangliawas,
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Ajmer - 305203 Rajasthan, India.
                </div>
              </div>
              <div className={styles.contactLeftSectionSubBlock}>
                <div className={styles.contactLeftSectionSubBlockHeading}>
                  <img src={Hours} alt="" />
                  Business Hours
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Monday – Friday: 9:00 AM – 6:00 PM
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Saturday: 10:00 AM – 3:00 PM
                </div>
              </div>
            </div>

            <div className={styles.contactLeftSectionBlock}>
              <div className={styles.contactLeftSectionHeading}>
                Contact Info
              </div>
              <div className={styles.contactLeftSectionSubBlockDelailsDiffType}>
                <img src={Mail} alt="" />
                info@ktasolutions.in
              </div>
              <div className={styles.contactLeftSectionSubBlockDelailsDiffType}>
                <img src={Call} alt="" />
                +91 94140-09900
              </div>
            </div>
          </div>
          <div className={styles.contactRightSection}>
            <div className={styles.contactRightSectionHeading}>
              Send a Message
            </div>
            <div className={styles.contactForm}>
              {showSuccess && (
                <div className={styles.SuccessBanner}>
                  ✅ Your message was sent successfully!
                </div>
              )}
              {isLoading ? (
                <div className={styles.LoaderOverlay}>
                  <Oval
                    height={60}
                    width={60}
                    color="#4fa94d"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ccc"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </div>
              ) : (
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
                >
                  <input
                    type="text"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    id={styles.ContactName}
                    className={styles.ContactInputBox}
                  />
                  <select
                    name="BusinessType"
                    id={styles.BusinessType}
                    className={styles.ContactInputBox}
                    value={formData.BusinessType}
                    onChange={handleChange}
                  >
                    <option value="B2B">B2B</option>
                    <option value="B2C">B2C</option>
                  </select>
                  <input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id={styles.ContactEmail}
                    className={styles.ContactInputBox}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No.*"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    id={styles.Number}
                    className={styles.ContactInputBox}
                  />
                  <select
                    name="Product"
                    id={styles.Product}
                    value={formData.Product}
                    onChange={handleChange}
                    className={styles.ContactInputBox}
                  >
                    <option value="" disabled selected hidden>
                      Product*
                    </option>
                    <option value="product1">product1</option>
                    <option value="product2">product2</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Message*"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id={styles.ContactMessage}
                    className={styles.ContactInputBoxLarge}
                  />
                  <button type="submit" className={styles.sendButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7155.161756093124!2d74.50055073935661!3d26.275262828474457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3969622a7f530631%3A0x5c76bb336204b79c!2sMangliyawas%2C%20Rajasthan%20305203!5e0!3m2!1sen!2sin!4v1746789854658!5m2!1sen!2sin"
          className={styles.map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>
      <div id={styles.contactPageMob}>
        <TopBanner
          head={ContactTopBanner}
          highlight={"We’re Here to Help!"}
          details={"Have questions? Need expert advice? Reach out to us!"}
        />

        <div className={styles.contactSection}>
          <div className={styles.contactRightSection}>
            <div className={styles.contactRightSectionHeading}>
              Send a Message
            </div>
            <div className={styles.contactForm}>
              {showSuccess && (
                <div className={styles.SuccessBanner}>
                  ✅ Your message was sent successfully!
                </div>
              )}

              {isLoading ? (
                <div className={styles.LoaderOverlay}>
                  <Oval
                    height={60}
                    width={60}
                    color="#4fa94d"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ccc"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </div>
              ) : (
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
                >
                  <input
                    type="text"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    id={styles.ContactName}
                    className={styles.ContactInputBox}
                  />
                  <select
                    name="BusinessType"
                    id={styles.BusinessType}
                    className={styles.ContactInputBox}
                    value={formData.BusinessType}
                    onChange={handleChange}
                  >
                    <option value="B2B">B2B</option>
                    <option value="B2C">B2C</option>
                  </select>
                  <input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id={styles.ContactEmail}
                    className={styles.ContactInputBox}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No.*"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    id={styles.Number}
                    className={styles.ContactInputBox}
                  />
                  <select
                    name="Product"
                    id={styles.Product}
                    value={formData.Product}
                    onChange={handleChange}
                    className={styles.ContactInputBox}
                  >
                    <option value="" disabled selected hidden>
                      Product*
                    </option>
                    <option value="product1">product1</option>
                    <option value="product2">product2</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Message*"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id={styles.ContactMessage}
                    className={styles.ContactInputBoxLarge}
                  />
                  <button type="submit" className={styles.sendButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7155.161756093124!2d74.50055073935661!3d26.275262828474457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3969622a7f530631%3A0x5c76bb336204b79c!2sMangliyawas%2C%20Rajasthan%20305203!5e0!3m2!1sen!2sin!4v1746789854658!5m2!1sen!2sin"
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
          <div className={styles.contactLeftSection}>
            <div className={styles.contactLeftSectionBlock}>
              <div className={styles.contactLeftSectionHeading}>Our Office</div>
              <div className={styles.contactLeftSectionSubBlock}>
                <div className={styles.contactLeftSectionSubBlockHeading}>
                  <img src={Location} alt="" />
                  KTA Solutions Headquarters
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Mangliawas - Nasirabad Road Mangliawas,
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Ajmer - 305203 Rajasthan, India.
                </div>
              </div>
              <div className={styles.contactLeftSectionSubBlock}>
                <div className={styles.contactLeftSectionSubBlockHeading}>
                  <img src={Hours} alt="" />
                  Business Hours
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Monday – Friday: 9:00 AM – 6:00 PM
                </div>
                <div className={styles.contactLeftSectionSubBlockDelails}>
                  Saturday: 10:00 AM – 3:00 PM
                </div>
              </div>
            </div>

            <div className={styles.contactLeftSectionBlock}>
              <div className={styles.contactLeftSectionHeading}>
                Contact Info
              </div>
              <div className={styles.contactLeftSectionSubBlockDelailsDiffType}>
                <img src={Mail} alt="" />
                info@ktasolutions.in
              </div>
              <div className={styles.contactLeftSectionSubBlockDelailsDiffType}>
                <img src={Call} alt="" />
                +91 94140-09900
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
