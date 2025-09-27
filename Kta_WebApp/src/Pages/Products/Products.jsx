import TopBanner from "@/Components/TopBanner/TopBanner";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";
import Accord from "@/Components/Accordion/Accord";
import bannerImg from "/assets/ProductsPage/ProductsHeading.svg";
import ProductCategory from "./ProductCategory";
import { getAllProductsApi } from "@/API/Api";
import { useLocation } from "react-router-dom";

function Products() {
  const productCategoryList = [
    {
      categoryName: "Tile Adhesive",
      categoryDesc:
        "Secure, fast-bonding adhesives for walls and floors. Easy to use and compatible with multiple surfaces.",
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
        "Smooth, durable fillers for tile joints. Improve aesthetics and durability across all spaces.",
      sectionId: 4,
    },
    {
      categoryName: "Application Tools",
      categoryDesc:
        "Professional tools—trowels, spacers, floats, and wedges—for precise, hassle-free installation.",
      sectionId: 5,
    },
  ];

  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  const categoryRefs = useRef({});

  const scrollToCategory = (sectionId) => {
    const section = categoryRefs.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      const category = productCategoryList.find((c) => c.sectionId === sectionId);
      if (category) setCurrentCategory(category.categoryName);
    } else {
      console.warn("No section found for", sectionId);
    }
  };

  // Handle redirect with query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionParam = params.get("section");
    if (sectionParam) {
      const sectionId = Number(sectionParam); // 🔥 force it into number
      scrollToCategory(sectionId);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(getAllProductsApi());
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

      {/* Category buttons (desktop) */}
      <div className={styles.FilterButtons}>
        {productCategoryList.map((category) => (
          <div
            key={category.sectionId}
            className={`${styles.latentButton} ${
              currentCategory === category.categoryName ? styles.activeButton : ""
            }`}
            onClick={() => scrollToCategory(category.sectionId)}
          >
            {category.categoryName}
          </div>
        ))}
      </div>

      {/* Category dropdown (mobile) */}
      <div className={styles.FilterOptionMob}>
        <select
          className={styles.outlineButton}
          onChange={(e) => scrollToCategory(Number(e.target.value))}
        >
          {productCategoryList.map((category) => (
            <option key={category.sectionId} value={category.sectionId}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>

      {/* Render all categories */}
      {productCategoryList.map((category, index) => (
        <div
          key={category.sectionId}
          ref={(el) => (categoryRefs.current[category.sectionId] = el)}
          className={styles.productBigContainer}
        >
          <ProductCategory
            key={index}
            detail={category}
            products={products.filter(
              (product) => product.category === category.categoryName
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
