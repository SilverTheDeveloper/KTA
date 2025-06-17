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
                    <img src="public/assets/ProductsPage/4000_bag.png" alt="" />
                </div>
                <div className={styles.ProductBlock}>
                    <div className={styles.rating}>4.5</div>
                    <div className={styles.ProductMiniDesc}>INTERIOR FLOORS
                        AND WALLS</div>

                    <div className={styles.ProductName}>
                        {product.name}
                    </div>
                    <div className={styles.ProductType}>
                        {product.type}
                    </div>

                    <div className={styles.ProductBreifDesc}>
                        {product.longDesc}
                    </div>
                </div>
            </div>


            <div className={styles.Chara}>
                <hr />
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

                <hr />

                <div className={styles.SectionHeading}>Documents and Downloads</div>
                <div></div>
            </div>

            <div className={styles.UserGuide}>
                <hr />
                <div className={styles.SectionHeading}>Usage Guide</div>

                <div className={styles.container}>
                    <p className={styles.paragraph}>
                        <span className={styles.title}>KTA 1000</span> is a tile adhesive certified as C1 T (as per EN 12004) and Type II (according to IS 15477:2019)
                        designed for tiles (≤3% porosity).
                    </p>

                    <div className={styles.sectionTitle}>Indoors:</div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>On horizontal and vertical surfaces</li>
                        <li className={styles.listItem}>On cement and cement-lime plaster, cement screeds, cement ground coats and concrete</li>
                    </ul>

                    <div className={styles.sectionTitle}>SUBSTRATE PREPARATION</div>
                    <p className={styles.paragraph}>
                        Adhesive can be applied on even and compact substrates, free of any substances that reduce adherence
                        (grease, bitumen, oil, paint, dust etc.). Concrete should be at least 1 month old. Cement screeds and
                        plasters should be fully cured. Substrates should be mechanically roughened and cleaned from dust. Substrates
                        must not be wet. Any existing dirt, loose layers and paint coating shall be mechanically removed. Absorbent
                        substrates shall be dampened and remove excess water before application.
                    </p>

                    <div className={styles.sectionTitle}>APPLICATION</div>
                    <p className={styles.paragraph}>
                        Pour VURA KTA 1000 into a container with the precisely measured amount of clean water and stir with a drill and
                        mixer until a homogeneous mass without lumps is obtained. Leave for 5 min. and then stir again. Apply the mortar
                        with a suitable notched trowel. Use the proper sized notch trowel to ensure full bedding in the tile. Do not soak
                        tiles in the water. The back buttering method shall be used for larger tiles (i.e. additionally a thin layer of
                        the mortar should be spread on the tile’s back side, contact area ≥ 90%). Place the tiles only during the open
                        time of the adhesive. Fresh excess mortar can be removed with water, hardened material can only be removed
                        mechanically. Grouting on the wall can be done after 8 hrs and after 24 hrs in porous tiles using VURA grouts.
                        Floors are set to light traffic after approx. 24 hrs. Expansion joints, joints at the corners of walls and floor
                        and around sanitary equipment shall be filled with sealants or shall be treated with appropriate treatment.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductWindowNew
