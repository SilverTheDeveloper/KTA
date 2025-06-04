import React, { useEffect, useState } from "react";
import styles from "./ProductWindow.module.scss";
import axios from "axios";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import { useParams } from "react-router-dom";
function ProductWindow() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Product Name", path: "/product/123" },
  ];

  const { id } = useParams(); // Get the dynamic ID from URL
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/product/${id}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("getting error in fetching product details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      {/* <BreadCrumb items={breadcrumbItems} /> */}

      {/* <p>Products &gt; TILE ADHESIVE &gt; KTA 1000</p> */}

      <div id={styles.ProductWindow}>
        <div className={styles.ProductImgList}>
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>
            <img src={product.img} alt="" />
          </div>
        </div>

        <div className={styles.ProductMainImg}>
          <img src={product.img} alt="" />
        </div>

        <div className={styles.ProductMain}>
          <div className={styles.ProductSpec}>INTERIOR FLOORS AND WALLS</div>

          <div className={styles.ProductName}>{product.name}</div>
          <div className={styles.ProductType}>{product.type}</div>

          <div className={styles.ProductDesc}>
            {product.longDesc}
            {/* <ul>
              <li>For fixing ceramic tiles on interior floors and walls</li>
              <li>Suitable for tile size up to 450 mm</li>
              <li>Single component - just add water</li>
            </ul> */}
          </div>

          <div className={styles.ProductAvailable}>
            Available in
            <div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className={styles["outline-button"]}>Connect and Shop -&gt;</div>
        </div>
      </div>
    </div>
  );
}

export default ProductWindow;
