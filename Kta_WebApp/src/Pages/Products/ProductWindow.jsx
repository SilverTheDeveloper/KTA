import React from 'react'
import styles from './ProductWindow.module.scss'
function ProductWindow() {
    return (
        <div>
            <p>Products &gt; TILE ADHESIVE &gt; KTA 1000</p>

            <div id={styles.ProductWindow} >
                <div className={styles.ProductImgList}>
                    <div>
                        <img src=".//assets/ProductsPage/Product.png" alt="" />
                    </div>
                    <div>
                        <img src=".//assets/ProductsPage/Product.png" alt="" />
                    </div>
                    <div>
                        <img src=".//assets/ProductsPage/Product.png" alt="" />
                    </div>
                    <div>
                        <img src=".//assets/ProductsPage/Product.png" alt="" />
                    </div>
                    <div>
                        <img src=".//assets/ProductsPage/Product.png" alt="" />
                    </div>
                </div>

                <div className={styles.ProductMainImg}>
                    <img src=".//assets/ProductsPage/Product.png" alt="" />
                </div>

                <div className={styles.ProductMain}>
                    <div className={styles.ProductSpec}>INTERIOR FLOORS
                        AND WALLS</div>

                    <div className={styles.ProductName}>KTA 1000</div>
                    <div className={styles.ProductType}>Type 1 - C1T</div>

                    <div className={styles.ProductDesc}>
                        KTA 1000 is a polymer modified tile adhesive suitable for small format ceramic tiles in internal areas.
                        <ul>
                            <li>For fixing ceramic tiles on interior floors and walls</li>
                            <li>Suitable for tile size up to 450 mm</li>
                            <li>Single component - just add water</li>
                        </ul>
                    </div>

                    <div className={styles.ProductAvailable}>
                        Available in
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className={styles['outline-button']}>
                        Connect and Shop -&gt;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductWindow
