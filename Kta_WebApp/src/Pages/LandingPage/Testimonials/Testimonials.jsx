import React, { useEffect, useRef, useState } from "react";
import HeadingComp from "../../../Components/HeadingComp/HeadingComp";
import styles from "./Testimonials.module.scss";
import TestiCards from "../../../Components/TestiCards/TestiCards";
// import { testimonialData } from "@/Data/LandingPage";
import axios, { Axios } from "axios";
import { API } from "@/constants";

const Testimonials = () => {
  const testiCardsRef = useRef(null);
  const [testimonialData, setTestimonialData] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const getTestimonialData = async () => {
      try {
        const response = await axios.get(
          `${API}/api/testimonial/getAll`
        );
        setTestimonialData(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    getTestimonialData();

    const checkScrollButtons = () => {
      if (testiCardsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testiCardsRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding issues
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
      checkScrollButtons();
    };

    const scrollContainer = testiCardsRef.current;

    window.addEventListener("resize", handleResize);
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
      }
    };
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
            onClick={() =>
              testiCardsRef.current.scrollBy({ left: -500, behavior: "smooth" })
            }
          >
            <img src="/assets/LandingPage/left-arrow.svg" alt="" />
          </button>
        )}
        {testimonialData && (
          <div className={styles.TestiCards} ref={testiCardsRef}>
            {testimonialData.map((item, index) => (
              <TestiCards key={index} data={item} />
            ))}
          </div>
        )}
        {!isMobile && canScrollRight && (
          <button
            className={`${styles.ScrollButton} ${styles.Right}`}
            onClick={() =>
              testiCardsRef.current.scrollBy({ left: 500, behavior: "smooth" })
            }
          >
            <img src="/assets/LandingPage/right-arrow.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
