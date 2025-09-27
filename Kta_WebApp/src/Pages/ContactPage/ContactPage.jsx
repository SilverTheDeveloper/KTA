import React, { useEffect, useState } from "react";
import styles from "./ContactPage.module.scss";
import TopBanner from "@/Components/TopBanner/TopBanner";
import ContactTopBanner from "/assets/ContactPage/ContactTopBanner.png";
import Hours from "/assets/ContactPage/Hours.svg";
import Call from "/assets/ContactPage/Call.svg";
import Location from "/assets/ContactPage/Location.svg";
import Mail from "/assets/ContactPage/Mail.svg";
import { Oval } from "react-loader-spinner";
import { API } from "@/constants";
import axios from "axios";
import Select from "react-select";
import { Prev } from "react-bootstrap/esm/PageItem";
import { getAllProductsApi, getEmailApi } from "@/API/Api";

const callNumber = (phoneNumber) => {
  if (!phoneNumber) return;
  window.location.href = `tel:${phoneNumber}`;
};

const handleMailClick = () => {
  window.location.href = "mailto:info@ktasolutions.in";
};

function ContactPage() {
  const bussinesstypeoptions = [
    { label: "B2B", value: "B2B" },
    { label: "B2C", value: "B2C" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    businessType: "B2B",
    email: "",
    mobileNo: "",
    product: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [productOptions, setProductOptions] = useState([]);

  const handleChange = (e) => {
    let name = e.target ? e.target.name : e.name;
    let value = e.target ? e.target.value : e.value;
    console.log(name, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(getEmailApi(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          businessType: "B2B",
          email: "",
          mobileNo: "",
          product: "",
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

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [showSuccess]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getAllProducts = async () => {
      const response = await axios.get(getAllProductsApi());
      const products = response.data;
      const options = products.map((product) => ({
        label: product.name,
        value: product.name,
      }));
      setProductOptions(options);
    };
    getAllProducts();
  }, []);

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
              <div
                onClick={handleMailClick}
                className={styles.contactLeftSectionSubBlockDelailsDiffType}
              >
                <img src={Mail} alt="" />
                info@ktasolutions.in
              </div>
              <div
                onClick={() => callNumber("+919414009900")}
                className={styles.contactLeftSectionSubBlockDelailsDiffType}
              >
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
                    className={styles.ContactInputs}
                    required
                  />
                  <select
                    name="businessType"
                    id={styles.businessType}
                    className={styles.ContactInputs}
                    value={formData.businessType}
                    onChange={handleChange}
                    required
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
                    className={styles.ContactInputs}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No.*"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    id={styles.Number}
                    className={styles.ContactInputs}
                    required
                  />
                  <select
                    name="product"
                    id={formData.product}
                    className={styles.ContactInputs}
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a Product
                    </option>
                    {productOptions.map((product, index) => (
                      <option key={index} value={product.value}>
                        {product.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Message*"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id={styles.ContactMessage}
                    className={styles.ContactInputBoxLarge}
                    required
                  // className={styles.ContactInputs}
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20237.49323050262!2d74.51274672116675!3d26.27732927506128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39696126ada5e175%3A0x7b0691088fc0f6a4!2sKTA%20Solutions%20%7C%20Sobhraj%20Developments%20Private%20Limited!5e0!3m2!1sen!2sin!4v1756039044067!5m2!1sen!2sin"
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
                    className={styles.ContactInputs}
                    required
                  />
                  <select
                    name="businessType"
                    id={styles.businessType}
                    className={styles.ContactInputs}
                    value={formData.businessType}
                    onChange={handleChange}
                    required
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
                    className={styles.ContactInputs}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No.*"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    id={styles.Number}
                    className={styles.ContactInputs}
                    required
                  />
                  <select
                    name="product"
                    id={formData.product}
                    className={styles.ContactInputs}
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a Product
                    </option>
                    {productOptions.map((product, index) => (
                      <option key={index} value={product.value}>
                        {product.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Message*"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id={styles.ContactMessage}
                    className={styles.ContactInputBoxLarge}
                    required
                  />
                  <button type="submit" className={styles.sendButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20237.49323050262!2d74.51274672116675!3d26.27732927506128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39696126ada5e175%3A0x7b0691088fc0f6a4!2sKTA%20Solutions%20%7C%20Sobhraj%20Developments%20Private%20Limited!5e0!3m2!1sen!2sin!4v1756039044067!5m2!1sen!2sin"
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
