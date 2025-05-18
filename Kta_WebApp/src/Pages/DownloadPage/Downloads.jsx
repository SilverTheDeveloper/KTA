import TopBanner from '@/Components/TopBanner/TopBanner'
import React from 'react'
import DownloadsHeading from "/assets/DownloadsPage/DownloadsHeading.png"
import DocumentIcon from "/assets/DownloadsPage/document-icon.png"
import DownloadIcon from "/assets/DownloadsPage/download-Icon.svg"
import styles from './Downloads.module.scss'
function Downloads() {
  return (
    <div id={styles.downloadsPageContainer}>
      <TopBanner head={DownloadsHeading} details={"Essential Resources – Download Product Guides & Manuals."} />
    
    <div className={styles.DownloadOption}>
        <div className={styles.outlineButton}>Technical Data Sheets</div>
        <div className={styles.outlineButton}>Material Safety Data Sheets</div>
        <div className={styles.outlineButton}>Method Statements</div>
        <div className={styles.outlineButton}>Certifications</div>
        <div className={styles.outlineButton}>Brochure & Catalogue</div>
    </div>


    {/* <div className={styles.DownloadOptionMob}>
        <div className={styles.outlineButtonMob}>Technical Data Sheets</div>
        <div className={styles.outlineButtonMob}>Material Safety Data Sheets</div>
        <div className={styles.outlineButtonMob}>Method Statements</div>
        <div className={styles.outlineButtonMob}>Certifications</div>
        <div className={styles.outlineButtonMob}>Brochure & Catalogue</div>
    </div> */}

    <div className={styles.DownloadCards}>
        <div className={styles.DownloadCard}>
            <img src={DocumentIcon} alt="" />
            <div className={styles.DownloadCardHeading}>
                KTA
            </div>
            <div className={styles.DownloadCardSubHeading}>
                Corporate Brochure
            </div>

            <div className={styles.DownloadCardFooter} >
                <img src={DownloadIcon} alt="" />
                Download
            </div>
        </div>
        <div className={styles.DownloadCard}>
            <img src={DocumentIcon} alt="" />
            <div className={styles.DownloadCardHeading}>
                KTA
            </div>
            <div className={styles.DownloadCardSubHeading}>
                Corporate Brochure
            </div>

            <div className={styles.DownloadCardFooter} >
                <img src={DownloadIcon} alt="" />
                Download
            </div>
        </div><div className={styles.DownloadCard}>
            <img src={DocumentIcon} alt="" />
            <div className={styles.DownloadCardHeading}>
                KTA
            </div>
            <div className={styles.DownloadCardSubHeading}>
                Corporate Brochure
            </div>

            <div className={styles.DownloadCardFooter} >
                <img src={DownloadIcon} alt="" />
                Download
            </div>
        </div>
    </div>
    
    </div>

  )
}

export default Downloads
