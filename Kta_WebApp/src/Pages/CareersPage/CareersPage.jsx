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

  const [isLoading, setIsLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("Failed to send email");
      console.error(error);
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
          To work at Vura, all you need is the power to juggle a cup of coffee
          and challenging tasks. Our team tear through the chaos with a
          smoothness that you would love to witness and experience. We are all
          for the ‘all work and no play makes anyone dull.’
        </p>
        <p>
          Vura encourages an open culture, innovation and propels ideation. And
          that is probably why our teams do know each other's roles a wee bit
          and back each other when needed. We love people with ideas and the
          thirst to see that idea through. Our doors are always open to welcome
          everyone.
        </p>
        <p>
          If you think you can match up to our challenge, fill the below form
          and submit.
        </p>
      </div>

      <div id={styles.formDiv}>
        {showSuccess && (
          <div className={styles.SuccessBanner}>
            ✅ You've applied successfully!
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
          <form onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputTag}
                placeholder="Name*"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className={styles.inputTag}
                placeholder="City"
                type="text"
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
              />
              <input
                className={styles.inputTag}
                placeholder="Apply for the post of"
                type="text"
                name="post"
                value={formData.post}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputTag}
                placeholder="Mobile number*"
                type="phone"
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
