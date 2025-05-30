import React from "react";
import styles from "./Products.module.scss";
import rightIcon from "../../../public/assets/ProductsPage/rightIcon.svg";
function ProductCard({ data }) {
  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductImg}>
        <img src={data.img} alt="" />
      </div>

      <div>
        <div className={styles.ProductName}>{data.name} </div>
        <div className={styles.ProductSpec}>{data.shortDesc}</div>
        <div className={styles.LinkToProduct}>
          Explore Products <img src={rightIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
