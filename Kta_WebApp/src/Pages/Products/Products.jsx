import TopBanner from "@/Components/TopBanner/TopBanner";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";
import ProductCard from "./ProductCard";
import Accord from "@/Components/Accordion/Accord";
import bannerImg from "/assets/ProductsPage/ProductsHeading.svg";
import ProductCategory from "./ProductCategory";
import { API } from "@/constants";
import { getAllProductsApi } from "@/API/Api";
import { useLocation } from "react-router-dom";

function Products() {
  const productCategoryList = [
    {

      categoryName: "Tile Adhesive",
      categoryDesc:
        " Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.",
      sectionId: 1,
    },
    {
      categoryName: "Stone Adhesive",
      categoryDesc:
        "Strong, durable adhesive for natural and engineered stone with superior grip and lasting support.",
      sectionId: 2,
    },
    {
      categoryName: "Repair Solution",
      categoryDesc:
        "Reliable, fast-acting solutions for fixing cracks, chips, and surface damage with lasting strength.",
      sectionId: 3,
    },
    {
      categoryName: "Tile Joint Filler",
      categoryDesc:
        "Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.",
      sectionId: 4,
    },
    {
      categoryName: "Application Tools",
      categoryDesc:
        " Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.",
      sectionId: 5,
    },
  ];
  const PRODUCTS_API_URL = "/api/products/getall";
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("Tile Adhesive");

  const categoryRefs = useRef({});

  const scrollToCategory = (sectionId) => {
    const section = categoryRefs.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("No section found for", categoryName);
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section"); // example: "tiles"
    console.log(sectionId);
    if (sectionId) {
      const section = categoryRefs.current[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }


  }, [location]);

  useEffect(() => {

    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section"); // example: "tiles"
    console.log(sectionId);
    if (sectionId) {
      const section = categoryRefs.current[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(getAllProductsApi());
        setProducts(response.data);
        console.log(response.data);

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
            className={`${styles.latentButton} ${currentCategory === category.categoryName
              ? styles.activeButton
              : ""
              }`}
            onClick={() => {
              scrollToCategory(category.sectionId);
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
          ref={(el) => (categoryRefs.current[category.sectionId] = el)}
          className={styles.productBigContainer}
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
