import React, { useEffect, useRef, useState } from "react";
import HeadingComp from "../../../Components/HeadingComp/HeadingComp";
import styles from "./Testimonials.module.scss";
import TestiCards from "../../../Components/TestiCards/TestiCards";
import { testimonialData } from "@/Data/LandingPage";

const Testimonials = () => {
  const testiCardsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScrollButtons = () => {
      if (testiCardsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testiCardsRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
      checkScrollButtons();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.Testimonials}>
      <div className={styles.HeadingSection}>
        <HeadingComp
          subHeading={"Testimonials"}
          heading={"What Our Happy User Says"}
        />
      </div>
      <div className={styles.TestiCardsWrapper}>
        {!isMobile && canScrollLeft && (
          <button
            className={`${styles.ScrollButton} ${styles.Left}`}
            onClick={() => testiCardsRef.current.scrollBy({ left: -500, behavior: "smooth" })}
          >
            <img src="/assets/LandingPage/left-arrow.svg" alt="" />
          </button>
        )}
        <div className={styles.TestiCards} ref={testiCardsRef}>
          {testimonialData.map((item, index) => (
            <TestiCards key={index} data={item} />
          ))}
        </div>
        {!isMobile && canScrollRight && (
          <button
            className={`${styles.ScrollButton} ${styles.Right}`}
            onClick={() => testiCardsRef.current.scrollBy({ left: 500, behavior: "smooth" })}
          >
            <img src="/assets/LandingPage/right-arrow.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
