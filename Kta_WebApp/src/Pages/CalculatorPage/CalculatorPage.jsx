import React, { useEffect, useState } from "react";
import TopBanner from "@/Components/TopBanner/TopBanner";
import bannerImg from "/assets/CalculatorPage/Calculators.svg";
import styles from "./CalculatorPage.module.scss";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const CalculatorPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("Tile Adhesive");
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/product/getall`
        );
        setAllProducts(response.data);
        setCurrentProduct(allProducts[0]);
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.message || "Failed to fetch products.");
      } finally {
        // setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.Container}>
      <TopBanner
        head={bannerImg}
        details="Whether you're a contractor, architect, or homeowner, 
                  our easy-to-use calculators help you determine the right 
                  amount of product for your surface care needs."
      />
      <div className={styles.FilterButtons}>
        <div className={styles.activeButton}>Calculator 1</div>
        <div className={styles.latentButton}>Calculator 2</div>
        <div className={styles.latentButton}>Calculator 3</div>
        <div className={styles.latentButton}>Calculator 4</div>
        <div className={styles.latentButton}>Calculator 5</div>
      </div>

      <div className={styles.LargeText}>Adhesive Coverage Calculator</div>

      <div className={styles.SplitContainer}>
        <div className={styles.LeftSection}>
          <div className={styles.SectionTitle}>Choose Adhesive</div>
          <div className={styles.Products}>
            <div className={styles.ProductGrid}>
              {allProducts
                .filter((product) => product.category === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.ProductBox} ${
                      currentProduct.name == item.name
                        ? styles.ActiveProduct
                        : ""
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.InputContainer}>
            <div className={styles.SectionTitle}>Enter Area</div>
            <div className={styles.smallText}>Total area of application</div>

            <div className={styles.InputDropdownBox}>
              <input type="text" placeholder="0000" />
              <div class={styles.Divider}></div>
              <select>
                <option>Sq.ft</option>
                <option>Sq.m</option>
                <option>Acres</option>
              </select>
            </div>
            <button type="Submit" className={styles.Btn}>
              Submit
            </button>
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.SectionTitle}>Required Adhesive</div>
          <div className={styles.Details}>
            <div className={styles.ProductImg}>
              <img src={currentProduct.img} alt="" />
            </div>
            <div>
              <div className={styles.ProductWeight}>0 Kgs</div>
              <div className={styles.ProductName}>{currentProduct.name}</div>
            </div>
            <div className={styles.Disclamer}>
              *Calculated quantity is an estimate, on-site consumption may vary
              as per site conditions, unevenness of surface, application
              methodology.
            </div>
            <div className={styles.Buttons}>
              <button className={styles.Btn}>Get in touch</button>
              <button className={`${styles.Btn} ${styles.Transparent} `}>
                <CiSearch /> Find a dealer
              </button>
            </div>
            <div className={styles.ThicknessDetails}>
              <div>Adhesive Thickness</div>
              <select
                name="thickness"
                id="thickness"
                className={styles.ThicknessDropdown}
              >
                <option>3 mm</option>
                <option>4 mm</option>
                <option>5 mm</option>
                <option>6 mm</option>
                <option>7 mm</option>
                <option>8 mm</option>
                <option>9 mm</option>
                <option>10 mm</option>
                <option>11 mm</option>
                <option>12 mm</option>
              </select>
              <div className={styles.Text1}>
                Adhesive quantity is based on 6mm thickness by default. Choose
                another thickness below if needed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
