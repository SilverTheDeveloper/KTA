import React from "react";
import { ProductList } from "@/Data/LandingPage";
import ProductCard from "@/Components/ProductCard/ProductCard";
import styles from "./ShowCaseSection.module.scss";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import GradientButton from "@/Components/GradientButton/GradientButton";
import Slider from "react-slick";
import "./ShowCaseSectionSlider.css";
import { Link } from "react-router-dom";

const ShowCaseSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <>
      <div id="showDesk" className={`${styles.showDesk} ${styles.showMobile}`}>
        <div className={styles.Headings}>
          <HeadingComp heading={"SHOWCASE"} subHeading={"Our Products"} />
          <div className={styles.SubHeading}>
            Discover our range of industry-leading products.
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {ProductList.map((productItem, index) => (
              <Link to={`/app/products?section=${productItem?.sectionId}`} className={styles.nolinkstyle}>
                <ProductCard  data={productItem} />
              </Link>

            ))}
          </Slider>
        </div>
        <div className={styles.fitButton}>
          <Link
            to={"app/products"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <GradientButton text={"View All Products"} />
          </Link>
        </div>
      </div>

      <div id="showMob" className={`${styles.showMob} ${styles.showMobile}`}>
        <div className={styles.Headings}>
          <HeadingComp heading={"Our Products"} subHeading={"SHOWCASE"} />
          <div className={styles.SubHeading}>
            Discover our range of industry-leading products.
          </div>
        </div>
        <div className={styles.productContainerMob}>
          {ProductList.map((productItem, index) => (
            <ProductCard data={productItem} key={index} />
          ))}
        </div>
        <div className="showcaseButton">
          <Link to="/app/products">
            <div className="outline-button">View All Products</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowCaseSection;
