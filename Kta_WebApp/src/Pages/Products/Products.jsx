import TopBanner from "@/Components/TopBanner/TopBanner";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";
import ProductCard from "./ProductCard";
import Accord from "@/Components/Accordion/Accord";
import bannerImg from "/assets/ProductsPage/ProductsHeading.svg";
import ProductCategory from "./ProductCategory";
import { API } from "@/constants";

function Products() {
  const productCategoryList = [
    {
      categoryName: "Tile Adhesive",
      categoryDesc:
        " Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.",
    },
    {
      categoryName: "Tile Grout",
      categoryDesc:
        "Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.",
    },
    {
      categoryName: "Tile Tool",
      categoryDesc:
        " Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.",
    },
  ];
  const PRODUCTS_API_URL = "/api/products/getall";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("Tile Adhesive");

  const categoryRefs = useRef({});

  const scrollToCategory = (categoryName) => {
    const section = categoryRefs.current[categoryName];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("No section found for", categoryName);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${API}/api/product/getall`
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.message || "Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div id={styles.Products}>
      <TopBanner
        details="Explore our premium range of tile adhesives designed for superior bonding and durability, suitable for various tile installations."
        head={bannerImg}
      />
      {/* mapping over category list to show buttons on desktop */}
      <div className={styles.FilterButtons}>
        {productCategoryList.map((category) => (
          <div
            key={category.categoryName}
            className={`${styles.latentButton} ${
              currentCategory === category.categoryName
                ? styles.activeButton
                : ""
            }`}
            onClick={() => {
              scrollToCategory(category.categoryName);
              setCurrentCategory(category.categoryName);
            }}
          >
            {category.categoryName}
          </div>
        ))}
      </div>

      {/* mapping over category list to show buttons on desktop */}
      <div className={styles.FilterOptionMob}>
        <select
          className={styles.outlineButton}
          onChange={(e) => scrollToCategory(e.target.value)}
        >
          {productCategoryList.map((category) => (
            <option key={category.categoryName} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>

      {productCategoryList.map((category, index) => (
        <div
          key={category.categoryName}
          ref={(el) => (categoryRefs.current[category.categoryName] = el)}
          style={{ padding: "0px 50px " }}
        >
          <ProductCategory
            key={index}
            detail={category}
            ref={(el) => (categoryRefs.current[category.categoryName] = el)}
            products={products.filter(
              (product) => product.category == category.categoryName
            )}
          />
        </div>
      ))}

      <div id={styles.FAQ}>
        <div className={styles.FAQHead}>FAQ’s</div>
        <Accord />
      </div>
    </div>
  );
}

export default Products;
