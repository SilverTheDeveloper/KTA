import TopBanner from "@/Components/TopBanner/TopBanner";
import React, { useState } from "react";
import DownloadsHeading from "/assets/DownloadsPage/DownloadsHeading.png";
import DocumentIcon from "/assets/DownloadsPage/document-icon.png";
import DownloadIcon from "/assets/DownloadsPage/download-Icon.svg";
import styles from "./Downloads.module.scss";
import { pdfs } from "@/Data/DownloadPdfs";

function Downloads() {
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const handleDownload = (filePath, fileName) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const filteredPdfs =
    selectedCategory === "All"
      ? pdfs
      : pdfs.filter(
        (pdf) => pdf.subtitle.toLowerCase() === selectedCategory.toLowerCase()
      );
  return (
    <div id={styles.downloadsPageContainer}>
      <TopBanner
        head={DownloadsHeading}
        details={"Essential Resources – Download Product Guides & Manuals."}
      />
      <div className={styles.DownloadOption}>
        {[
          "All",
          "Technical Data Sheets",
          "Material Safety Data Sheets",
          "Method Statements",
          "Certifications",
          "Brochure & Catalogue",
        ].map((category) => (
          <div
            key={category}
            className={`${styles.outlineButton} ${selectedCategory === category ? styles.active : ""
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={styles.DownloadOptionMob}>
        <select
          className={styles.outlineButton}
          name="downloadFiles"
          id={styles.DownloadFiles}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Technical Data Sheets">Technical Data Sheets</option>
          <option value="Material Safety Data Sheets">
            Material Safety Data Sheets
          </option>
          <option value="Method Statements">Method Statements</option>
          <option value="Certifications">Certifications</option>
          <option value="Brochure & Catalogue">Brochure & Catalogue</option>
        </select>
      </div>
      <div className={styles.DownloadCards}>
        {filteredPdfs.length > 0 ? (
          filteredPdfs.map((pdf) => (
            <div key={pdf.id} className={styles.DownloadCard}>
              <img src={DocumentIcon} alt="" />
              <div className={styles.DownloadCardHeading}>{pdf.title}</div>
              <div className={styles.DownloadCardSubHeading}>{pdf.subtitle}</div>

              <div
                onClick={() => handleDownload(pdf.filePath, pdf.fileName)}
                className={styles.DownloadCardFooter}
              >
                <img src={DownloadIcon} alt="" />
                Download
              </div>
            </div>
          ))
        ) : (
          <p className={styles.NoDataText}>To be added soon</p>
        )}
      </div>
    </div>
  );
}

export default Downloads;
