import React from "react";
import styles from "./AboutPage.module.scss";
import heroBanner from "../../../public/assets/AboutPage/heroBanner.png";
import firstSectionPic from "../../../public/assets/AboutPage/FirstSectionPic.png";
import secondSectionPic from "../../../public/assets/AboutPage/SecondSectionPic.png";
import thirdSectionPic from "../../../public/assets/AboutPage/ThirdSectionPic.png";
import forthSectionPic from "../../../public/assets/AboutPage/ForthSectionPic.png";
import missionSvg from "../../../public/assets/AboutPage/MissionIcon.svg";
import visionSvg from "../../../public/assets/AboutPage/visionIcon.svg";

import missionSvgMob from "../../../public/assets/AboutPage/mobView/MissionIcon.svg";
import visionSvgMob from "../../../public/assets/AboutPage/mobView/VisionIcon.svg";


import ReliabilityIcon from "../../../public/assets/AboutPage/SmallItems/ReliabilityIcon.svg";
import IntegrityIcon from "../../../public/assets/AboutPage/SmallItems/IntegrityIcon.svg";
import ExcellenceIcon from "../../../public/assets/AboutPage/SmallItems/ExcellenceIcon.svg";
import InnovationIcon from "../../../public/assets/AboutPage/SmallItems/InnovationIcon.svg";


function AboutPage() {
  return (
    <>
      <div id={styles.HeroBanner}>
        <img src={heroBanner} alt="hero banner" />
      </div>

      <div className={`${styles.Container} ${styles.HalfHalfSection}`}>
        <div className={styles.sectionDesc}>
          <div className={styles.KTAHeading}>KTA Solutions</div>
          <div className={styles.OurStoryHeading}>India’s New Standard in Tile & Stone Solutions.</div>
          <div className={styles.OurStoryDesc}>
            KTA Solutions is a leading name in tile adhesives, stone care, and surface repair solutions across India. Engineered with cutting-edge technology and backed by deep industry expertise, our products are trusted by architects, contractors, and professionals nationwide.
            <br />
            <br />
            From ceramic tiles to complex restoration solutions, we bring together global innovation with local understanding to deliver materials that last—and results that impress.
            <br />
            <br />
            With a growing network of partners and applicators, we are committed to quality, sustainability, and shaping the future of surface solutions in India.

          </div>
        </div>
        <div className={styles.propDivFirst}>
          {/* <img src={firstSectionPic} alt="" /> */}
        </div>
      </div>


      <div className={`${styles.Mission} ${styles.HalfHalfSection}`}>

        <div className={styles.propDivSecond}>
          <img src={secondSectionPic} alt="" />
        </div>
        <div className={styles.OurMissionBlock}>
          <div className={styles.OurMissionSmallBlock}>

            <div className={styles.OurMissionHeading}><img src={missionSvg} alt="" />Mission</div>
            <div className={styles.OurMissionDesc}>
              To provide premium, sustainable, and innovative solutions in ceramics, stone care, and surface protection that enhance durability, aesthetics, and functionality.
            </div>
          </div>
        </div>
      </div>


      <div className={`${styles.Vision} ${styles.HalfHalfSection}`}>

        <div className={styles.OurVisionBlock}>
          <div className={styles.OurVisionSmallBlock}>

            <div className={styles.OurVisionHeading}><img src={visionSvg} alt="" />Vision</div>
            <div className={styles.OurVisionDesc}>
              To be a global leader in advanced material solutions, setting industry benchmarks for quality, sustainability, and customer satisfaction.
            </div>
          </div>
        </div>
        <div className={styles.propDivThird}>
          <img src={thirdSectionPic} alt="" />
        </div>
      </div>


      <div className={styles.MissionVisionMob}>
        <div className={styles.MissionMob}>
          <div className={styles.Heading}><img src={missionSvgMob} alt="" />Mission</div>
          <div className={styles.Desc}>
            To provide premium, sustainable, and innovative solutions in ceramics, stone care, and surface protection that enhance durability, aesthetics, and functionality.
          </div>
        </div>
        <div className={styles.VisionMob}>
          <div className={styles.Heading}><img src={visionSvgMob} alt="" />Vision</div>
          <div className={styles.Desc}>
            To be a global leader in advanced material solutions, setting industry benchmarks for quality, sustainability, and customer satisfaction.
          </div>
        </div>
      </div>



      <div className={styles.ValuesSection}>
        <div className={styles.HeadingSection}>
          <div className={styles.Heading}>Our <span className={styles.spanHeading}>Core</span> Values</div>
          <div className={styles.Desc}>At KTA Solutions, these four principles guide everything we create, build, and stand for</div>
        </div>
        <div className={` ${styles.HalfHalfSection}`}>

          <div className={styles.propDivSecond}>
            <img src={forthSectionPic} alt="" />
          </div>
          <div class={styles.gridContainer}>
            <div class={styles.gridItem}>
              <img src={IntegrityIcon} alt="" />
              <div className={styles.Heading}>Integrity</div>
              <div className={styles.Desc}>Honest, transparent, and ethical in every action.</div>
            </div>
            <div class={styles.gridItem}>
              <img src={InnovationIcon} alt="" />
              <div className={styles.Heading}>Innovation</div>
              <div className={styles.Desc}>Constantly creating smarter, stronger surface solutions.</div>
            </div>
            <div class={styles.gridItem}>
              <img src={ReliabilityIcon} alt="" />
              <div className={styles.Heading}>Reliability</div>
              <div className={styles.Desc}>Trusted performance, every product, every time.</div>
            </div>
            <div class={styles.gridItem}>
              <img src={ExcellenceIcon} alt="" />
              <div className={styles.Heading}>Excellence</div>
              <div className={styles.Desc}>Trusted performance, every product, every time.</div>
            </div>
          </div>

        </div>


      </div >

    </>
  );
}

export default AboutPage
