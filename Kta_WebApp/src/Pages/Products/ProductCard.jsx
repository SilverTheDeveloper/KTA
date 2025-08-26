import React from "react";
import styles from "./Products.module.scss";
import rightIcon from "../../../public/assets/ProductsPage/rightIcon.svg";
import { Link } from "react-router-dom";
function ProductCard({ data }) {
  return (
    <div className={styles.ProductCard}>
      <Link to={`/app/product/${data._id}`} style={{ textDecoration: "none" }}>
        <div className={styles.ProductImg}>
          <img src={data.img} alt="" />
        </div>

        <div>
          <div className={styles.ProductName}>{data.name} </div>
          <div className={styles.ProductSpec}>{data.shortDesc}</div>
          <div className={styles.LinkToProduct}>
            Explore Product <img src={rightIcon} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
}
export default ProductCard;
