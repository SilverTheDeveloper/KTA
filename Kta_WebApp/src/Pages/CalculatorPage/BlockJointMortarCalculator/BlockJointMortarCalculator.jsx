import React, { useState } from 'react'
import styles from "./BlockJointMortarCalculator.module.scss";

function BlockJointMortarCalculator({
  allProducts, activeCategory 
}) {
   const [blockLength , setBlockLength] = useState(0);
   const [blockWidth , setBlockWidth] = useState(0);
   const [blockHeight , setBlockHeight] = useState(0);
   const [blockArea , setBlockArea] = useState(0);
   const [mortarRequired, setMortarRequired] = useState(0);

   const handleInputChange = (e) => {
  switch (e.target.name) {
    case "blockLength":
      setBlockLength(e.target.value);
      break;

    case "blockHeight":
      setBlockHeight(e.target.value);
      break;

    case "blockWidth":
      setBlockWidth(e.target.value);
      break;

    case 'blockArea' :
      setBlockArea(e.target.value);  

    default:
      break;
  }
};

  return (
    <div>
      <div className={styles.headingDiv}>
        <div className={styles.Heading} >{activeCategory?.name}</div>
        <div className={styles.subHeading}>A tool to estimate the right quantity of tile joint filler for your requirements.</div>
      </div>

      <div className={styles.calcWindow}>
        <div className={styles.leftSection}>
          <div className={styles.firstBlock}>
            <p className={styles.fieldHeading}>Enter Area, Tile
              Width & Length</p>
            <div>
              <label className={styles.fieldSubHeading} for="total_Area">Total Area</label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="total_Area"
                  name='blockArea'
                  placeholder="0000"
                  nam
                  onChange={handleInputChange}

                />
                <div class={styles.Divider}></div>
                <select>
                  <option value={"Sq.ft"}>Sq.ft</option>
                  <option value={"Sq.m"}>Sq.m</option>
                  <option value={"Acres"}>Acres</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.fieldSubHeading} for="tile_Width">Tile Width (1-5000)</label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="block_Width"
                  name = 'blockwidth'
                  placeholder="0000"

                />
                <div class={styles.Divider}></div>
                <select>
                  <option value={"Sq.ft"}>Sq.ft</option>
                  <option value={"Sq.m"}>Sq.m</option>
                  <option value={"Acres"}>Acres</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.fieldSubHeading} for="tile_Length">Tile Length (1-5000)</label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="tile_Length"
                  name = 'blockLength'
                  placeholder="0000"

                />
                <div class={styles.Divider}></div>
                <select>
                  <option value={"Sq.ft"}>Sq.ft</option>
                  <option value={"Sq.m"}>Sq.m</option>
                  <option value={"Acres"}>Acres</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.secondBlock}>

            <p className={styles.fieldHeading}>Enter Joint Width & Tile Thickness</p>
            <div className={styles.secondBlockInnerDiv}>
              <div>
                <label className={styles.fieldSubHeading} for="joint_Width">Joint Width (1-5000)</label>
                <div className={styles.InputDropdownBox}>
                  <input
                    type="number"
                    id="joint_Width"
                    placeholder="0000"

                  />
                  <div class={styles.Divider}></div>
                  <select>
                    <option value={"Sq.ft"}>Sq.ft</option>
                    <option value={"Sq.m"}>Sq.m</option>
                    <option value={"Acres"}>Acres</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={styles.fieldSubHeading} for="tile_Thickness">Tile Thickness (1-5000)</label>
                <div className={styles.InputDropdownBox}>
                  <input
                    type="number"
                    id="tile_Thickness"
                    placeholder="0000"

                  />
                  <div class={styles.Divider}></div>
                  <select>
                    <option value={"Sq.ft"}>Sq.ft</option>
                    <option value={"Sq.m"}>Sq.m</option>
                    <option value={"Acres"}>Acres</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          <button className={styles.subButton}>submit</button>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.subHeading}>Required Tile Joint Filler</div>

          <div className={styles.beforeDesc}>
            Fill in the requirement
on the left <br /> to display the quantity required
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockJointMortarCalculator
