import TopBanner from "@/Components/TopBanner/TopBanner";
import React from "react";
import Slider from "react-slick";

import styles from "./Products.module.scss";
import { ProductsLis } from "@/Data/ProductsLis";
import ProductCard from "./ProductCard";
import Accord from "@/Components/Accordion/Accord";
import bannerImg from "@/assets/ProductsPage/ProductsHeading.svg";
function Products() {
  
  return (
    <div id={styles.Products}>
      <TopBanner
        details="Explore our premium range of tile adhesives designed for superior bonding and durability, suitable for various tile installations."
        head={bannerImg}
      />

      <div className={styles.FilterButtons}>
        <div className={styles.activeButton}>Adhesive</div>
        <div className={styles.latentButton}>Tile Grouts and Epoxy</div>
        <div className={styles.latentButton}>Tile Tools and Cleaner</div>
      </div>


      <div className={`${styles.ProductList} ${styles.Container}`}>
        {ProductsLis.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <div id={styles.FAQ}>
        <div className={styles.FAQHead}>FAQ’s</div>
        <Accord />
      </div>
    </div>
  );
}
export default Products;
