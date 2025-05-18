import TopBanner from "@/Components/TopBanner/TopBanner";
import React from "react";
import bannerImg from "@/assets/CalculatorPage/Calculators.svg";
import styles from "./CalculatorPage.module.scss";
import { Container } from "react-bootstrap";
const CalculatorPage = () => {
  return (
    <Container style={{ maxWidth: "1440px" }}>
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
        <div className={styles.InputContainer}>
          <div className={styles.SizesContainer}>
            <div className={styles.Size}>
              <p>Size L (MM)</p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
              />
            </div>

            <div className={styles.Size}>
              <p>Size H (MM)</p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
              />
            </div>

            <div className={styles.Size}>
              <p>Size W (MM)</p>
              <input
                type="number"
                placeholder="0000"
                className={styles.SizeInput}
              />
            </div>
          </div>

          <div className={styles.Buttons}>
            <button type="submit" className={styles.CalcBtn}>
              Calculate
            </button>
            <button className={styles.ResetBtn}>Reset</button>
          </div>
        </div>

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
              />
            </div>
          </div>
        </div>
        <div className={styles.GeneralInfo}>
          <h1 className={styles.Heading}>General Information</h1>
          <ul className={styles.BulletPoints}>
            <li>All results are rounded off in 2 Decimals</li>
            <li>Considered Mortar thickness is approx 2.5 MM</li>
            <li>For 40 KG bag size only</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default CalculatorPage;
