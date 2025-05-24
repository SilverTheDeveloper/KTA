import React, { useEffect, useState } from "react";
import styles from "./productCard.module.scss";

const ProductCard = ({ data }) => {
  const [images, setImages] = useState([data.img1, data.img2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => [prev[1], prev[0]]); // Simple shuffle
    }, 2000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className={styles.ProductContainer}>
      <div className={styles.ProductImg}>
        <img src={images[0]} alt="ProductImg 1" />
      </div>
      <div className={styles.Title}>{data.title}</div>
      <div className={styles.Description}>{data.description}</div>
    </div>
  );
};

export default ProductCard;

