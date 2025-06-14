import React, { useEffect, useState } from "react";
import TopBanner from "@/Components/TopBanner/TopBanner";
import bannerImg from "/assets/CalculatorPage/Calculators.svg";
import styles from "./CalculatorPage.module.scss";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { Link } from "react-router-dom";

const CalculatorPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("Tile Adhesive");
  const [currentProduct, setCurrentProduct] = useState({});

  const [area, setArea] = useState("");
  const [thickness, setThickness] = useState("6 mm"); // 6 mm as the default
  const [weight, setWeight] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/product/getall`
        );
        setAllProducts(response.data);
        setCurrentProduct(response.data[0]);
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.message || "Failed to fetch products.");
      } finally {
        // setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = () => {
    if (!area) {
      setWeight(0);
      return;
    }
    const areaVal = parseFloat(area);
    let multiplier = 0;

    // Convert "6 mm" to 6
    const mm = parseInt(thickness, 10);
    if (mm <= 3) multiplier = 0.41;
    else if (mm === 4) multiplier = 4 / 3;
    else if (mm === 5) multiplier = 5 / 3;
    else if (mm === 6) multiplier = 6 / 3;
    else if (mm === 7) multiplier = 7 / 3;
    else if (mm === 8) multiplier = 8 / 3;
    else if (mm === 9) multiplier = 9 / 3;
    else if (mm === 10) multiplier = 10 / 3;
    else if (mm === 11) multiplier = 11 / 3;
    else if (mm === 12) multiplier = 12 / 3;

    setWeight((areaVal * multiplier).toFixed(2)); // Keep 2 decimal places
  };

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
                .filter((product) => product?.category === category)
                .map((item, index) => (
                  <div
                    onClick={() => setCurrentProduct(item)}
                    key={index}
                    className={`${styles.ProductBox} ${
                      currentProduct?.name == item.name
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
              <input
                type="number"
                placeholder="0000"
                onChange={(e) => setArea(e.target.value)}
              />
              <div class={styles.Divider}></div>
              <select>
                <option>Sq.ft</option>
                <option>Sq.m</option>
                <option>Acres</option>
              </select>
            </div>
            <button type="Submit" className={styles.Btn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.SectionTitle}>Required Adhesive</div>
          <div className={styles.Details}>
            <div className={styles.ProductImg}>
              <img src={currentProduct?.img} alt="" />
            </div>
            <div>
              <div className={styles.ProductWeight}>{weight} Kgs</div>
              <div className={styles.ProductName}>{currentProduct?.name}</div>
            </div>
            <div className={styles.Disclamer}>
              *Calculated quantity is an estimate, on-site consumption may vary
              as per site conditions, unevenness of surface, application
              methodology.
            </div>
            <div className={styles.Buttons}>
              <Link to={"/app/contact"}>
                <button className={styles.Btn}>Get in touch</button>
              </Link>
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
                value={thickness}
                onChange={(e) => setThickness(e.target.value)}
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
