import React from "react";
import styles from "./AboutPage.module.scss";
import CenterSlider from "@/Components/Slider/CenterSlider";
import { fixingSolutionCardsData } from "@/Data/AboutPage";
import heroBanner from "@/assets/AboutPage/heroBanner.png";
import ourStoryPropImg from "@/assets/AboutPage/ourStoryProp.png";
import missionSvg from "@/assets/AboutPage/missionSVG.svg";
import visionSvg from "@/assets/AboutPage/visionSVG.svg";
function AboutPage() {
  return (
    <>
      <div id={styles.HeroBanner}>
        <img src={heroBanner} alt="hero banner" />
      </div>

      <div id={styles.OurStorySection} className={styles.Container}>
        <div>
          <p className={styles.OurStoryHeading}>Our Story</p>
          <p className={styles.OurStoryDesc}>
            At KTA Solutions, we provide high-performance adhesives, grouts, and
            tools for seamless tile installation. Designed for professionals and
            homeowners, our durable, easy-to-use products ensure flawless
            results with reliability and efficiency.
          </p>
        </div>
        <div className={styles.propDiv}>
          <img src={ourStoryPropImg} alt="" />
        </div>
      </div>

      <div id={styles.Mission}>
        <div className={styles.MissionBlock}>
          <div className={styles.MissionHeading}>
            <img src={missionSvg} alt="" />
            <p>Mission</p>
          </div>
          <p className={styles.MissionDesc}>
            To provide premium, sustainable, and innovative solutions in
            ceramics, stone care, and surface protection that enhance
            durability, aesthetics, and functionality.
          </p>
        </div>

        <div className={styles.MissionBlock}>
          <div className={styles.MissionHeading}>
            <img src={visionSvg} alt="" />
            <p>Vision</p>
          </div>
          <p className={styles.MissionDesc}>
            To be a global leader in advanced material solutions, setting
            industry benchmarks for quality, sustainability, and customer
            satisfaction.
          </p>
        </div>
      </div>

      <div id={styles.FixingSolution} >
        <p className={styles.FixingSolHeading}>
          A Complete<span> Fixing</span> Solution.
        </p>
        <div className={styles.FixingSolCards}>
          {fixingSolutionCardsData.map((card, index) => (
            <div className={styles.FixingSolCard} key={index}>
              <img src={card.img} alt="Solution card Icon" />
              <p className={styles.FixingSolCardHeading}>{card.title}</p>
              <p className={styles.FixingSolCardDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id={styles.Movement} className={styles.Container}>
        <div className={styles.MovementHeader}>
          <p className={styles.MovementTopHeading}>HEY!</p>
          <p className={styles.MovementHeading}>Join the Movement</p>
          <p className={styles.MovementDesc}>
            Surfaces are more than just materials—they tell a story. Let’s make
            yours one of resilience, beauty, and innovation.
          </p>
        </div>

        <CenterSlider />

        <div className={styles.ButtonContainer}>
          <div className={styles.OutlineButton}>Explore our World</div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
