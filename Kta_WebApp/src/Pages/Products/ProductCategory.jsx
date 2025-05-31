import React from "react";
import styles from "./products.module.scss";
import ProductCard from "./ProductCard";

const ProductCategory = ({ detail, products }) => {
  if (!detail || !products) return null;

  return (
    <>
      <div className={styles.TypesOfProducts}>
        <div className={styles.ProductTypeHeading}>{detail.categoryName}</div>
        <div className={styles.ProductTypeDesc}>{detail.categoryDesc}</div>
      </div>
      <div className={`${styles.ProductList} ${styles.Container}`}>
        {products.length === 0 ? (
          <div>Coming soon</div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        )}
      </div>
    </>
  );
};

export default ProductCategory;
