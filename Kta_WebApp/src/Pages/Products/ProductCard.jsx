import React from "react";
import styles from "./Products.module.scss";
import rightIcon from "../../../public/assets/ProductsPage/rightIcon.svg";
import { Link } from "react-router-dom";
function ProductCard({ data }) {
  console.log(data);
  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductImg}>
        <img src={data.img} alt="" />
      </div>

      <div>
        <div className={styles.ProductName}>{data.name} </div>
        <div className={styles.ProductSpec}>{data.shortDesc}</div>
        <Link to={`/app/product/${data._id}`}>
          <div className={styles.LinkToProduct}>
            Explore Products <img src={rightIcon} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
export default ProductCard;
