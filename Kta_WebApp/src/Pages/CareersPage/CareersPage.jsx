import TopBanner from "@/Components/TopBanner/TopBanner";
import React from "react";
import styles from "./CareersPage.module.scss";
import bannerImg from "/assets/CareersPage/CareersHeading.png";
const CareersPage = () => {
  return (
    <div id={styles.Careers}>
      <TopBanner
        details="Whether you're a contractor, architect, or homeowner, our easy-to-use calculators help you determine the right amount of product for your surface care needs."
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
        <form action="">
          <div className={styles.inputDiv}>
            <input
              className={styles.inputTag}
              placeholder="Name*"
              type="text"
            />
            <input className={styles.inputTag} placeholder="City" type="text" />
          </div>
          <div className={styles.inputDiv}>
            <input
              className={styles.inputTag}
              placeholder="Email*"
              type="email"
            />
            <input
              className={styles.inputTag}
              placeholder="Apply for the post of"
              type="text"
            />
          </div>
          <div className={styles.inputDiv}>
            <input
              className={styles.inputTag}
              placeholder="Mobile number*"
              type="phone"
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
              name=""
              id=""
              className={styles.textareaStyle}
              placeholder="Message..."
            ></textarea>
          </div>
          <div className={styles.inputDiv}>
            <button className={styles.submitButton} type="submit">
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareersPage;
