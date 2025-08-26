import React, { useEffect, useState } from "react";
import styles from "./ProductWindow.module.scss";
import axios from "axios";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { API } from "@/constants";
import DocumentIcon from "/assets/DownloadsPage/document-icon.png";
import DownloadIcon from "/assets/DownloadsPage/download-Icon.svg";
import TopBanner from "@/Components/TopBanner/TopBanner";
import bannerImg from "/assets/ProductsPage/ProductsHeading.svg";
import { getProductById } from "@/API/Api";

function ProductWindow() {
  const sections = [
    { label: "Description", id: "description" },
    { label: "Characteristics", id: "characteristics" },
    { label: "Documents and Downloads", id: "documents" },
    { label: "Usage Guide", id: "usage" },
  ];

  const stringTest =
    "Ensure the substrate is clean, dry, and free from dust, grease, or loose particles. New concrete should be cured for at least 28 days. Cementitious screeds or plaster should be fully set before application. For highly absorbent surfaces, pre-wet or apply a suitable primer if required";

  const navigate = useNavigate();
  const { id } = useParams(); // Get the dynamic ID from URL
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [iconSize, setIconSize] = useState(24);

  const handleClose = () => {
    navigate(-1);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/KTASolutions.pdf"; // path relative to 'public' folder
    link.download = "KTASolutions.pdf"; // this sets the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(getProductById(id));
        setProduct(response.data);
        console.log(response.data.keyFeatures);
      } catch (error) {
        console.log("getting error in fetching product details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

  useEffect(() => {
    function handleResize() {
      setIconSize(window.innerWidth < 768 ? 16 : 24);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.BannerCenter}>
        <TopBanner
          details="Explore our premium range of tile adhesives designed for superior bonding and durability, suitable for various tile installations."
          head={bannerImg}
        />
      </div>
      <div className={styles.ProductWindow}>
        <div className={styles.ProductSectionListMobile}>
          <select
            onChange={(e) => {
              const sectionId = e.target.value;
              document
                .getElementById(sectionId)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.ProductSectionList}>
          {sections.map((section) => (
            <div
              key={section.id}
              className={styles.outlineButton}
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {section.label}
            </div>
          ))}
        </div>{" "}
        <div className={styles.ProductShowCase} id="description">
          <div className={styles.ProductImg}>
            <img src={product.img} alt="" />
          </div>
          <div className={styles.ProductBlock}>
            <div className={styles.ProductMiniDesc}>{product.shortDesc}</div>

            <div className={styles.ProductName}>{product.name}</div>
            <div className={styles.ProductType}>{product.type}</div>

            <div className={styles.ProductBreifDesc}>{product.longDesc}</div>
          </div>
        </div>
        <div className={styles.Chara}>
          <hr />
          {product?.keyFeatures && (
            <div>
              <div className={styles.SectionHeading} id="characteristics">
                Key Features
              </div>
              <ul>
                {product.keyFeatures
                  ?.split(".")
                  .slice(0, -1)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
          )}
          <div className={styles.Available}>
            <div>Available in</div>
            <div className={styles.AvaiColor1}></div>
            <div className={styles.AvaiColor2}></div>
          </div>
        </div>
        <div className={styles.Download}>
          <hr />

          <d iv className={styles.SectionHeading} id="documents">
            Documents and Downloads
            <div className={styles.DownloadCard}>
              <img src={DocumentIcon} alt="" />
              <div className={styles.DownloadCardHeading}>KTA</div>
              <div className={styles.DownloadCardSubHeading}>
                Corporate Brochure
              </div>

              <div
                onClick={handleDownload}
                className={styles.DownloadCardFooter}
              >
                <img src={DownloadIcon} alt="" />
                Download
              </div>
            </div>
          </d>
        </div>
        {product?.usageGuide && (
          <div className={styles.UserGuide}>
            <hr />
            <div className={styles.SectionHeading} id="usage">
              Usage Guide
            </div>

            {product?.usageGuide?.surfacePreparation && (
              <div>
                <div className={styles.subSectionHeading}>
                  SURFACE PREPARATION
                </div>
                <ul>
                  {product.usageGuide.surfacePreparation
                    ?.split(".")
                    .slice(0, -1)
                    .map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            )}

            {product?.usageGuide?.mixing && (
              <div>
                <div className={styles.subSectionHeading}>MIXING</div>
                <ul>
                  {product.usageGuide.mixing
                    ?.split(".")
                    .slice(0, -1)
                    .map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            )}

            {product?.usageGuide?.application && (
              <div>
                <div className={styles.subSectionHeading}>APPLICATION</div>
                <ul>
                  {product.usageGuide.application
                    .split(".")
                    .slice(0, -1)
                    .map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            )}

            {product?.usageGuide?.grouting && (
              <div>
                <div className={styles.subSectionHeading}>GROUTING</div>
                <ul>
                  {product.usageGuide.grouting
                    .split(".")
                    .slice(0, -1)
                    .map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            )}

            {product?.usageGuide?.coverage && (
              <div>
                <div className={styles.subSectionHeading}>COVERGAE</div>
                <ul>
                  {product.usageGuide.coverage
                    ?.split(".")
                    .slice(0, -1)
                    .map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            )}

            {product?.usageGuide?.curingAndSetting && (
              <div>
                <div className={styles.subSectionHeading}>
                  CURING AND SETTING
                </div>
                <ul>
                  {product.usageGuide.curingAndSetting
                    ?.split(".")
                    .slice(0, -1)
                    .map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductWindow;
