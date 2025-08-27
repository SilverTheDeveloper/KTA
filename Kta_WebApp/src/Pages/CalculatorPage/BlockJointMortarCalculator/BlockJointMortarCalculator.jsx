import React from 'react'
import styles from "./BlockJointMortarCalculator.module.scss";

function BlockJointMortarCalculator() {
  return (
    <div>

        <h3>bhai abhi kam chala le kal kardunga</h3>
        <p>Joint Filler Coverage Calculator</p>
        <p>A tool to estimate the right quantity of tile joint filler for your requirements.</p>
        <div className={styles.calcWindow}>
            
       
        <div className={styles.leftSection}>
            <div className={styles.firstBlock}>
                <p>Enter Area, Tile
Width & Length</p>   
                 <div className={styles.InputDropdownBox}>
                              <input
                                type="number"
                                placeholder="0000"
                              
                              />
                              <div class={styles.Divider}></div>
                              <select>
                                <option value={"Sq.ft"}>Sq.ft</option>
                                <option value={"Sq.m"}>Sq.m</option>
                                <option value={"Acres"}>Acres</option>
                              </select>
                 </div>

                   <div className={styles.InputDropdownBox}>
                              <input
                                type="number"
                                placeholder="0000"
                              
                              />
                              <div class={styles.Divider}></div>
                              <select>
                                <option value={"Sq.ft"}>Sq.ft</option>
                                <option value={"Sq.m"}>Sq.m</option>
                                <option value={"Acres"}>Acres</option>
                              </select>
                 </div>

                   <div className={styles.InputDropdownBox}>
                              <input
                                type="number"
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

            <div className={styles.secondBlock}>
                <p>Enter Joint Width & Tile Thickness</p>
                <div className={styles.secondBlockInnerDiv}>
                 <div className={styles.InputDropdownBox}>
                              <input
                                type="number"
                                placeholder="0000"
                              
                              />
                              <div class={styles.Divider}></div>
                              <select>
                                <option value={"Sq.ft"}>Sq.ft</option>
                                <option value={"Sq.m"}>Sq.m</option>
                                <option value={"Acres"}>Acres</option>
                              </select>
                 </div> 
                  <div className={styles.InputDropdownBox}>
                              <input
                                type="number"
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

            <button>submit</button>
        </div>
        <div className={styles.rightSection}>
            <p>Required Tile Joint Filler</p>
        </div>
         </div>
    </div>
  )
}

export default BlockJointMortarCalculator
