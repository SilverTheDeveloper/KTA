import React from 'react'
import styles from './ProductWindowNew.module.scss'
function ProductWindowNew() {
    return (
        <div className={styles.ProductWindow}>
            <div className={styles.ProductSectionList} >
                <div className={styles.outlineButton}>Description</div>
                <div className={styles.outlineButton}>Characteristics</div>
                <div className={styles.outlineButton}>Documents and Downloads</div>
                <div className={styles.outlineButton}>Usage Guide</div>
            </div>

            <div className={styles.ProductShowCase}>
                <div className={styles.ProductImg}>
                    <img src="" alt="" />
                </div>
                <div className={styles.ProductBlock}>
                    <div className={styles.rating}>4.5</div>
                    <div className={styles.ProductMiniDesc}>INTERIOR FLOORS
                        AND WALLS</div>

                    <div className={styles.ProductName}>
                        KTA 1000
                    </div>
                    <div className={styles.ProductType}>
                        TYPE 1 - CIT
                    </div>

                    <div className={styles.ProductBreifDesc}>
                        KTA 1000 is a polymer modified tile adhesive suitable for small format ceramic tiles in internal areas.
                    </div>
                </div>
            </div>

            <div className={styles.Chara}>
                  <div className={styles.SectionHeading}>Characteristics</div>
                <ul>
                    <li>For fixing ceramic tiles on interior floors and walls</li>
                    <li>Suitable for tile size up to 450 mm</li>
                    <li>Single component - just add water
                    </li>
                </ul>

                <div className={styles.Available}>
                    <div ></div>
                    <div ></div>
                </div>
            </div>

            <div className={styles.Download}>
                             <div className={styles.SectionHeading}>Documents and Downloads</div>
                <div></div>
            </div>

            <div className={styles.UserGuide}>
                <div className={styles.SectionHeading}>Usage Guide</div>
            </div>
        </div>
    )
}

export default ProductWindowNew
