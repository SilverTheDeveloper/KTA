import React, { useEffect, useState } from "react";
import TopBanner from "@/Components/TopBanner/TopBanner";
import bannerImg from "/assets/CalculatorPage/Calculators.svg";
import styles from "./CalculatorPage.module.scss";
import axios from "axios";
import { getAllProductsApi } from "@/API/Api";
import AdhesiveCalculator from "./AdhesiveCalculator/AdhesiveCalculator";
import BlockJointMortarCalculator from "./BlockJointMortarCalculator/BlockJointMortarCalculator";
import JointFillerCalculator from "./JointFillerCalculator/JointFillerCalculator";
// import JointFillerCalculator from "@/Components/Calculators/JointFillerCalculator";
// import BlockJointMortarCalculator from "@/Components/Calculators/BlockJointMortarCalculator";

const CalculatorPage = () => {
  const categoryList = [
    {
      name: "Adhesive Coverage Calculator",
      productCategory: "Tile Adhesive",
    },
    {
      name: "Block Joint Mortar Coverage",
      productCategory: "Block Joint Mortar Coverage",
    },   {
      name: "Joint-Filler Coverage",
      productCategory: "Tile Adhesive",
    }
  ];

  const [allProducts, setAllProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryList[0]);
  const [error, setError] = useState(null);

  // map categories to calculators
  const categoryComponents = {
    "Adhesive Coverage Calculator": (props) => (
      <AdhesiveCalculator {...props} />
    ),
    "Joint-Filler Coverage": (props) => <JointFillerCalculator {...props} />,
    // "Joint-Filler Coverage": (props) => <JointFillerCalculator {...props} />,
    "Block Joint Mortar Coverage": (props) => (
      <BlockJointMortarCalculator {...props} />
    ),
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(getAllProductsApi());
        setAllProducts(response.data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to fetch products.");
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

      {/* Category Filter Buttons */}
      <div className={styles.FilterButtons}>
        {categoryList.map((category, index) => (
          <div
            key={index}
            className={
              activeCategory.name === category.name
                ? styles.activeButton
                : styles.latentButton
            }
            onClick={() => setActiveCategory(category)}
          >
            {category.name}
          </div>
        ))}
      </div>

      {/* Error Message */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Render Calculator Based on Category */}
      <div className={styles.CalculatorWrapper}>
        {categoryComponents[activeCategory?.name]({
          allProducts,
          activeCategory,
        })}
      </div>
    </div>
  );
};

export default CalculatorPage;
