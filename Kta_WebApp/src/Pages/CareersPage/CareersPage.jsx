import TopBanner from "@/Components/TopBanner/TopBanner";
import React, { useState } from "react";
import styles from "./CareersPage.module.scss";
import bannerImg from "/assets/CareersPage/CareersHeading.png";
import { API } from "@/constants";
import { Oval } from "react-loader-spinner"; // or use your custom CSS spinner

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    post: "",
    mobileNo: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);

    setIsLoading(true); // Show loader

    try {
      const response = await fetch(`${API}/api/career/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          city: "",
          email: "",
          post: "",
          mobileNo: "",
          message: "",
        });
      } else {
        throw new Error(result);
      }
    } catch (error) {
      //alert(error.message);
      setShowSuccess(false);
      setError(error.message);
      setShowError(true);
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <div id={styles.Careers}>
      <TopBanner
        details="At KTA Solutions, we believe in pushing boundaries and redefining industry standards. If you're passionate about innovation and looking for an exciting career, we’d love to have you on board!"
        head={bannerImg}
      />

      <div id={styles.headingDiv}>
        <div className={styles.heading}>
          KTA Solutions
          <br /> Welcomes
          <span> Everyone!</span>
        </div>
      </div>

      <div id={styles.content}>
        <p>
          At KTA Solutions, all you need is the passion to innovate and the
          determination to deliver excellence. Our team thrives on solving
          challenges — whether it’s perfecting a tile adhesive formula or
          creating sustainable solutions that redefine industry standards.
        </p>
        <p>
          We believe in the power of collaboration, where ideas flow freely,
          expertise is shared, and every voice matters. Our open culture
          encourages innovation, continuous learning, and mutual support —
          because great results happen when we work together.
        </p>
        <p>
          Here, no two days are the same. One day you might be testing
          cutting-edge materials, and the next, you could be brainstorming the
          next big leap in surface solutions. We welcome thinkers, doers, and
          problem-solvers who are ready to shape the future of construction
          technology in India.
        </p>
        <p>
          If you believe you have the drive to match our vision and values, fill
          out the form below and let’s start building the future — together.
        </p>
      </div>

      <div id={styles.formDiv}>
        {showSuccess && (
          <div className={styles.SuccessBanner}>
            ✅ You've applied successfully!
          </div>
        )}
        {showError && <div className={styles.ErrorBanner}>❌{error}</div>}
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
          <form onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputTag}
                placeholder="Name*"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className={styles.inputTag}
                placeholder="City"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputTag}
                placeholder="Email*"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className={styles.inputTag}
                placeholder="Apply for the post of"
                type="text"
                name="post"
                value={formData.post}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputTag}
                placeholder="Mobile number*"
                type="number"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
              />
              <div className={styles.fileUpload}>
                <label For="fileUpload" className={styles.customFileUpload}>
                  Choose File
                </label>
                <span className={styles.fileName} id="file-name">
                  No File Chosen
                </span>
                <input
                  id="fileUpload"
                  placeholder="Apply for the post of"
                  type="file"
                />
              </div>
            </div>
            <div className={styles.inputDiv}>
              <textarea
                name="message"
                className={styles.textareaStyle}
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className={styles.inputDiv}>
              <button className={styles.submitButton} type="submit">
                Submit Now
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
