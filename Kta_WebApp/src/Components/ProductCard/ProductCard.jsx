
import React, { useEffect, useState } from "react";
import styles from "./productCard.module.scss";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
      setImages((prev) => [prev[1], prev[0]]); // Simple shuffle
    }, 3000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className={styles.ProductContainer}>
      <div className="fade-slideshow">
        <img
          src={data.img1}
          alt="ProductImg 1"
          className={`fade-img ${currentImage === 0 ? "visible" : ""}`}
        />
        <img
          src={data.img2}
          alt="ProductImg 2"
          className={`fade-img ${currentImage === 1 ? "visible" : ""}`}
        />
      </div>
      <div className={styles.Title}>{data.title}</div>
      <div className={styles.Description}>{data.description}</div>
    </div>
  );
};

export default ProductCard;
