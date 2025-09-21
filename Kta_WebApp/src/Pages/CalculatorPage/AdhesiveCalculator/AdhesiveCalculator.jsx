import React, { useEffect, useState } from "react";
import styles from "../CalculatorPage.module.scss";
import { Link } from "react-router-dom";
import { SQFT_TO_METERSQ_CONST } from "@/constants";

const AdhesiveCalculator = ({ allProducts, activeCategory }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [area, setArea] = useState("");
  const [thickness, setThickness] = useState("6 mm"); // 6 mm as the default
  const [weight, setWeight] = useState(0);
  const [siUnit, setsiUnit] = useState("Sq.ft");
  const [invalidArea, setInvalidArea] = useState(null);

  useEffect(() => {
    setCurrentProduct(allProducts[0]);
  }, [allProducts]);

  const handleSIUnit = (e) => {
    console.log(e);
    setsiUnit(e.target.value);
  };

  const handleSubmit = () => {
    if (!area) {
      setWeight(0);
      return;
    }
    if (area < 0 || area > Number.MAX_SAFE_INTEGER) {
      setInvalidArea("Enter valid input!!");
      return;
    } else {
      setInvalidArea(null);
    }
    const areaVal = parseFloat(area);
    const thicknessValue = parseInt(thickness, 10);

    let weightRequired;
    if (siUnit == "Sq.ft") {
      weightRequired =
        areaVal *
        SQFT_TO_METERSQ_CONST *
        thicknessValue *
        (currentProduct?.density || 0);
    } else if (siUnit == "Sq.m") {
      weightRequired =
        areaVal * thicknessValue * (currentProduct?.density || 0);
    } else {
      weightRequired =
        areaVal * thicknessValue * (currentProduct?.density || 0);
    }
    setWeight(weightRequired.toFixed(2)); // Keep 2 decimal places
  };

  return (
    <>
      <div className={styles.calcuInnerWrapper}>
        <div className={styles.LargeText}>{activeCategory?.name}</div>
        <div className={styles.SplitContainer}>
          <div className={styles.LeftSection}>
            <div className={styles.SectionTitle}>Choose Adhesive</div>
            <div className={styles.Products}>
              <div className={styles.ProductGrid}>
                {allProducts
                  .filter((product) =>
                    product?.category?.includes(activeCategory?.productCategory))
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
                  value={area}
                />
                <div className={styles.Divider}></div>
                <select onChange={handleSIUnit}>
                  <option value={"Sq.ft"}>Sq.ft</option>
                  <option value={"Sq.m"}>Sq.m</option>
                </select>
              </div>
              {invalidArea && <p style={{ color: "red" }}>{invalidArea}</p>}
              <button
                type="Submit"
                className={styles.Btn}
                onClick={handleSubmit}
              >
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
                *Calculated quantity is an estimate, on-site consumption may
                vary as per site conditions, unevenness of surface, application
                methodology.
              </div>
              <div className={styles.Buttons}>
                <Link to={"/app/contact"}>
                  <button className={styles.Btn}>Get in touch</button>
                </Link>
                <button
                  className={`${styles.Btn} ${styles.Transparent} `}
                  onClick={() => {
                    setArea((prev) => (prev = 0));
                    setWeight(0);
                  }}
                >
                  Reset
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
    </>
  );
};

export default AdhesiveCalculator;
