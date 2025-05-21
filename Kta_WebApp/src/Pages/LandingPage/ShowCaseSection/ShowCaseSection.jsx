
import React from "react";
import { ProductList } from "@/Data/LandingPage";
import ProductCard from "@/Components/ProductCard/ProductCard";
import styles from "./ShowCaseSection.module.scss";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import GradientButton from "@/Components/GradientButton/GradientButton";
import Slider from "react-slick";
import './ShowCaseSectionSlider.css'

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
              <ProductCard data={productItem} />
            ))}

          </Slider>
        </div>
        <div className={styles.fitButton}>
          <GradientButton text={"View All Products"} />
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
          <ProductCard data={productItem} />
        ))}
        </div>
        <div className={styles.fitButton}>
          <GradientButton text={"View All Products"} />
        </div>

      </div>
    </>
  );
};

export default ShowCaseSection;

