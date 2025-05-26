import React, { useState } from "react";
import TopBanner from "@/Components/TopBanner/TopBanner";
import bannerImg from "/assets/CalculatorPage/Calculators.svg";
import styles from "./CalculatorPage.module.scss";

const CalculatorPage = () => {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const [jointSurfaceArea, setJointSurfaceArea] = useState("");
  const [mortarRequired, setMortarRequired] = useState("");
  const [blocksRequired, setBlocksRequired] = useState("");
  const [mortarForHundredSqFt, setMortarForHundredSqFt] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const calculate = () => {
    // Parse inputs to numbers
    const l = parseFloat(length);
    const h = parseFloat(height);
    const w = parseFloat(width);

    if (isNaN(l) || isNaN(h) || isNaN(w)) {
      alert("Please enter valid numbers for all dimensions.");
      return;
    }

    let divident = 1000 * 1000;
    const jointArea =
      2 * ((w * l) / divident + (l * h) / divident + (h * w) / divident);

    const mortarPerBlock = jointSurfaceArea * 0.35 * 0.083;
    const blocksPer100SqFt = 100 / blocksRequired;
    const mortarPer100SqFt = blocksPer100SqFt * mortarPerBlock;

    // Set results
    setJointSurfaceArea(jointArea.toFixed(2));
    setMortarRequired(mortarPerBlock.toFixed(2));
    setBlocksRequired(blocksPer100SqFt.toFixed(2));
    setMortarForHundredSqFt(mortarPer100SqFt.toFixed(2));
  };

  const reset = () => {
    setLength("");
    setHeight("");
    setWidth("");
    setJointSurfaceArea("");
    setMortarRequired("");
    setBlocksRequired("");
    setMortarForHundredSqFt("");
  };

  return (
      <div className={styles.Container}>
        <TopBanner
          head={bannerImg}
          details="Whether you're a contractor, architect, or homeowner, 
                  our easy-to-use calculators help you determine the right 
                  amount of product for your surface care needs."
        />
        <div className={styles.FilterButtons}>
          <div className={styles.activeButton}>Calculator 1</div>
          <div className={styles.latentButton}>Calculator 2</div>
          <div className={styles.latentButton}>Calculator 3</div>
          <div className={styles.latentButton}>Calculator 4</div>
          <div className={styles.latentButton}>Calculator 5</div>
        </div>

        <div className={styles.LargeText}>
          KTA
          <span> Volume </span>
          Calculator
        </div>

        {/* Input Section */}
        <div className={styles.InputContainer}>
          <div className={styles.SizesContainer}>
            <div className={styles.Size}>
              <p>Size L (MM)</p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
                value={length}
                onChange={handleInputChange(setLength)}
              />
            </div>

            <div className={styles.Size}>
              <p>Size H (MM)</p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
                value={height}
                onChange={handleInputChange(setHeight)}
              />
            </div>

            <div className={styles.Size}>
              <p>Size W (MM)</p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
                value={width}
                onChange={handleInputChange(setWidth)}
              />
            </div>
          </div>

          <div className={styles.Buttons}>
            <button
              type="submit"
              className={styles.CalcBtn}
              onClick={calculate}
            >
              Calculate
            </button>
            <button className={styles.ResetBtn} onClick={reset}>
              Reset
            </button>
          </div>
        </div>

        {/* Result Section */}
        <div className={styles.Result}>
          <h1>Result</h1>
          <div className={styles.SizesContainer}>
            <div className={styles.Size}>
              <p className={styles.ResultLabel}>
                Joint Surface Area Of 1 Block
              </p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
                value={jointSurfaceArea}
                readOnly
              />
            </div>

            <div className={styles.Size}>
              <p className={styles.ResultLabel}>
                Mortar Required in KG / Block
              </p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
                value={mortarRequired}
                readOnly
              />
            </div>

            <div className={styles.Size}>
              <p className={styles.ResultLabel}>
                Blocks Required for 100 SQ. FT.
              </p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
                value={blocksRequired}
                readOnly
              />
            </div>

            <div className={styles.Size}>
              <p className={styles.ResultLabel}>
                Jointing Mortar in KG REQ. for 100 SQ. FT.
              </p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
                value={mortarForHundredSqFt}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* General Info */}
        <div className={styles.GeneralInfo}>
          <h1 className={styles.Heading}>General Information</h1>
          <ul className={styles.BulletPoints}>
            <li>All results are rounded off in 2 Decimals</li>
            <li>Considered Mortar thickness is approx 2.5 MM</li>
            <li>For 40 KG bag size only</li>
          </ul>
        </div>
      </div>
  );
};

export default CalculatorPage;
