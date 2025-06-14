import React, { useEffect, useState } from "react";
import styles from "./ProductWindow.module.scss";
import axios from "axios";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { API } from "@/constants";
function ProductWindow() {
  //   const breadcrumbItems = [
  //     { label: "Home", path: "/" },
  //     { label: "Products", path: "/products" },
  //     { label: "Product Name", path: "/product/123" },
  //   ];

  const navigate = useNavigate();
  const { id } = useParams(); // Get the dynamic ID from URL
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const handleClose = () => {
    navigate(-1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `${API}/api/product/${id}`
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
    // <div className={styles.productWindowDiv}>
    //   {/* <BreadCrumb items={breadcrumbItems} /> */}

    //   <div id={styles.ProductWindow}>
    //     <div className={styles.ProductImgList}>
    //       <div>
    //         <img src={product.img} alt="" />
    //       </div>
    //       <div>
    //         <img src={product.img} alt="" />
    //       </div>
    //       <div>
    //         <img src={product.img} alt="" />
    //       </div>
    //       <div>
    //         <img src={product.img} alt="" />
    //       </div>
    //       <div>
    //         <img src={product.img} alt="" />
    //       </div>
    //     </div>

    //     <div className={styles.ProductMainImg}>
    //       <img src={product.img} alt="" />
    //     </div>

    //     <div className={styles.ProductMain}>
    //       <div className={styles.ProductSpec}>INTERIOR FLOORS AND WALLS</div>

    //       <div className={styles.ProductName}>{product.name}</div>
    //       <div className={styles.ProductType}>{product.type}</div>

    //       <div className={styles.ProductDesc}>
    //         {product.longDesc}

    //       </div>

    //       <div className={styles.ProductAvailable}>
    //         Available in
    //         <div>
    //           <div></div>
    //           <div></div>
    //         </div>
    //       </div>

    //       <div className={styles["outline-button"]}>Connect and Shop -&gt;</div>
    //     </div>
    //     <div style={{ cursor: "pointer" }}>
    //       <IoClose size={30} onClick={handleClose} />
    //     </div>
    //   </div>
    // </div>

    <div className={styles.ProductWindow}>
      <div className={styles.ProductSectionList}>
        <div
          className={styles.outlineButton}
          onClick={() =>
            document
              .getElementById("description")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Description
        </div>
        <div
          className={styles.outlineButton}
          onClick={() =>
            document
              .getElementById("characteristics")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Characteristics
        </div>
        <div
          className={styles.outlineButton}
          onClick={() =>
            document
              .getElementById("documents")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Documents and Downloads
        </div>
        <div
          className={styles.outlineButton}
          onClick={() =>
            document
              .getElementById("usage")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Usage Guide
        </div>
      </div>

      <div className={styles.ProductShowCase} id="description">
        <div className={styles.ProductImg}>
          <img src={product.img} alt="" />
        </div>
        <div className={styles.ProductBlock}>
          <div className={styles.rating}>
            {/* TODO : need to update rating with product.rating */}
            <span className={styles.ratingText}>{4.5}</span>{" "}
            {[...Array(5)].map((_, i) => {
              const filled = i + 1 <= Math.floor(4.5);
              const half = i + 1 === Math.ceil(4.5) && !Number.isInteger(4.5);
              return filled ? (
                <FaStar key={i} color="gold" size={24} />
              ) : half ? (
                <FaStarHalfAlt key={i} color="gold" size={24} />
              ) : (
                <FaRegStar key={i} color="gold" size={24} />
              );
            })}
          </div>

          <div className={styles.ProductMiniDesc}>{product.shortDesc}</div>

          <div className={styles.ProductName}>{product.name}</div>
          <div className={styles.ProductType}>{product.type}</div>

          <div className={styles.ProductBreifDesc}>{product.longDesc}</div>
        </div>
      </div>

      <div className={styles.Chara}>
        <hr />
        <div className={styles.SectionHeading} id="characteristics">
          Characteristics
        </div>

        <ul>
          <li>For fixing ceramic tiles on interior floors and walls</li>
          <li>Suitable for tile size up to 450 mm</li>
          <li>Single component - just add water</li>
        </ul>

        <div className={styles.Available}>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={styles.Download}>
        <hr />

        <div className={styles.SectionHeading} id="documents">
          Documents and Downloads
        </div>
        <div></div>
      </div>

      <div className={styles.UserGuide}>
        <hr />
        <div className={styles.SectionHeading} id="usage">
          Usage Guide
        </div>

        <div className={styles.container}>
          <p className={styles.paragraph}>
            <span className={styles.title}>KTA 1000</span> is a tile adhesive
            certified as C1 T (as per EN 12004) and Type II (according to IS
            15477:2019) designed for tiles (≤3% porosity).
          </p>

          <div className={styles.sectionTitle}>Indoors:</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              On horizontal and vertical surfaces
            </li>
            <li className={styles.listItem}>
              On cement and cement-lime plaster, cement screeds, cement ground
              coats and concrete
            </li>
          </ul>

          <div className={styles.sectionTitle}>SUBSTRATE PREPARATION</div>
          <p className={styles.paragraph}>
            Adhesive can be applied on even and compact substrates, free of any
            substances that reduce adherence (grease, bitumen, oil, paint, dust
            etc.). Concrete should be at least 1 month old. Cement screeds and
            plasters should be fully cured. Substrates should be mechanically
            roughened and cleaned from dust. Substrates must not be wet. Any
            existing dirt, loose layers and paint coating shall be mechanically
            removed. Absorbent substrates shall be dampened and remove excess
            water before application.
          </p>

          <div className={styles.sectionTitle}>APPLICATION</div>
          <p className={styles.paragraph}>
            Pour VURA KTA 1000 into a container with the precisely measured
            amount of clean water and stir with a drill and mixer until a
            homogeneous mass without lumps is obtained. Leave for 5 min. and
            then stir again. Apply the mortar with a suitable notched trowel.
            Use the proper sized notch trowel to ensure full bedding in the
            tile. Do not soak tiles in the water. The back buttering method
            shall be used for larger tiles (i.e. additionally a thin layer of
            the mortar should be spread on the tile’s back side, contact area ≥
            90%). Place the tiles only during the open time of the adhesive.
            Fresh excess mortar can be removed with water, hardened material can
            only be removed mechanically. Grouting on the wall can be done after
            8 hrs and after 24 hrs in porous tiles using VURA grouts. Floors are
            set to light traffic after approx. 24 hrs. Expansion joints, joints
            at the corners of walls and floor and around sanitary equipment
            shall be filled with sealants or shall be treated with appropriate
            treatment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductWindow;
