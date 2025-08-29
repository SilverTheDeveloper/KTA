import React from 'react'
import styles from "./BlockJointMortarCalculator.module.scss";

function BlockJointMortarCalculator() {
  return (
    <div>

      <div className={styles.headingDiv}>
        <div className={styles.Heading} >Joint Filler Coverage Calculator</div>
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
              <label className={styles.fieldSubHeading} for="tile_Width">Tile Width (1-5000)</label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="tile_Width"
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
