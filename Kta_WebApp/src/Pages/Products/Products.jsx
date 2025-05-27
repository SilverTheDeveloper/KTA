import TopBanner from "@/Components/TopBanner/TopBanner";
import React from "react";
import styles from "./Products.module.scss";
import { ProductsList } from "@/Data/ProductsLis";
import ProductCard from "./ProductCard";
import Accord from "@/Components/Accordion/Accord";
import bannerImg from "/assets/ProductsPage/ProductsHeading.svg";
function Products() {

  return (
    <div id={styles.Products}>
      <TopBanner
        details="Explore our premium range of tile adhesives designed for superior bonding and durability, suitable for various tile installations."
        head={bannerImg}
      />

      <div className={styles.FilterButtons}>
        <div className={styles.activeButton}>Tile Adhesive</div>
        <div className={styles.latentButton}>Stone Adhesives</div>
        <div className={styles.latentButton}>Stone Care</div>
        <div className={styles.latentButton}>Repair Solutions</div>
        <div className={styles.latentButton}>Tile Joint Fillers</div>
        <div className={styles.latentButton}>Application Tools</div>
      </div>
      <div className={styles.FilterOptionMob}>

        <select className={styles.outlineButton} name="downloadFiles" id={styles.DownloadFiles} >
          <option className={styles.optionText} value="Brochure&Catalogue" >Tile Adhesive</option>
          <option className={styles.optionText} value="TechnicalDataSheets">Stone Adhesives</option>
          <option className={styles.optionText} value="MaterialSafetyDataSheets">Stone Care</option>
          <option className={styles.optionText} value="MethodStatements">Repair Solutions</option>
          <option className={styles.optionText} value="Certifications">Tile Joint Fillers</option>
          <option className={styles.optionText} value="Certifications">Application Tools</option>
        </select>
      </div>


      <div className={styles.TypesOfProducts}>
        <div className={styles.ProductTypeHeading}>
          Tile Adhesives
        </div>
        <div className={styles.ProductTypeDesc}>
          Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.
        </div>
      </div>
      <div className={`${styles.ProductList} ${styles.Container}`}>
        {ProductsList.map((product) => (
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
