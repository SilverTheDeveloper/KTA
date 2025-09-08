import React, { useEffect, useState } from "react";
import styles from "./BlockJointMortarCalculator.module.scss";
import { L_TO_MCUBE, MM_TO_M, SQFT_TO_METERSQ_CONST } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

function BlockJointMortarCalculator({ allProducts, activeCategory }) {
  const [mortarProduct, setMortarProduct] = useState({});
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    blockArea: "",
    blockAreaUnit: "Sq.ft",
    blockLength: "",
    blockLengthUnit: "mm",
    blockWidth: "",
    blockWidthUnit: "mm",
    blockHeight: "",
    blockHeightUnit: "mm",
    jointWidth: "",
    jointWidthUnit: "mm",
  });

  const MAX_VALUE = Number.MAX_SAFE_INTEGER;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateInputs = () => {
    let newErrors = {};

    [
      "blockArea",
      "blockWidth",
      "blockLength",
      "blockHeight",
      "jointWidth",
    ].forEach((field) => {
      const value = formData[field];
      if (!value) {
        newErrors[field] = "This field is required.";
      } else if (Number(value) === 0) {
        newErrors[field] = "Enter a value greater than 0.";
      } else if (Number(value) < 0) {
        newErrors[field] = "Value cannot be negative.";
      } else if (Number(value) > MAX_VALUE && field !== "jointWidth") {
        newErrors[field] = `Value cannot exceed ${MAX_VALUE}.`;
      } else if (field === "jointWidth" && Number(value) > 5000) {
        newErrors[field] = "Value cannot exceed 5000";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const ConvertToDouble = (str) => {
    return parseFloat(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    let areaInMetre =
      formData["blockAreaUnit"] === "Sq.m"
        ? ConvertToDouble(formData["blockArea"])
        : ConvertToDouble(formData["blockArea"]) * SQFT_TO_METERSQ_CONST;

    let blockLengthInMetre =
      formData["blockLengthUnit"] === "m"
        ? ConvertToDouble(formData["blockLength"])
        : ConvertToDouble(formData["blockLength"]) * MM_TO_M;

    let blockWidthInMetre =
      formData["blockWidthUnit"] === "m"
        ? ConvertToDouble(formData["blockWidth"])
        : ConvertToDouble(formData["blockWidth"]) * MM_TO_M;

    let blockHeightInMetre =
      formData["blockHeightUnit"] === "m"
        ? ConvertToDouble(formData["blockHeight"])
        : ConvertToDouble(formData["blockHeight"]) * MM_TO_M;

    let jointWidthInMetre =
      formData["jointWidthUnit"] === "m"
        ? ConvertToDouble(formData["jointWidth"])
        : ConvertToDouble(formData["jointWidth"]) * MM_TO_M;

    let volume =
      areaInMetre *
      jointWidthInMetre *
      blockHeightInMetre *
      (1 / blockLengthInMetre + 1 / blockWidthInMetre);

    let volumeInLitre = volume * L_TO_MCUBE;

    const mortarRequired = ( volumeInLitre * (mortarProduct?.density || 0)).toFixed(2);
   
    setMortarProduct((prev) => ({ ...prev, mortarRequired }));
  };

  useEffect(() => {
    if (!allProducts || allProducts.length === 0) return;

    const product = allProducts.find(
      (product) => product?.name === "KTA 8000"
    );
    if (product) {
      setMortarProduct(product);
    }
  }, [allProducts]);

  return (
    <div>
      <div className={styles.headingDiv}>
        <div className={styles.Heading}>{activeCategory?.name}</div>
        <div className={styles.subHeading}>
          A tool to estimate the right quantity of block joint filler for your
          requirements.
        </div>
      </div>

      <div className={styles.calcWindow}>
        <form className={styles.leftSection} onSubmit={handleSubmit}>
          <div className={styles.firstBlock}>
            <p className={styles.fieldHeading}>
              Enter Area, block Width & Length
            </p>

            {/* Block Area */}
            <div>
              <label className={styles.fieldSubHeading} htmlFor="total_Area">
                Total Area
              </label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="total_Area"
                  name="blockArea"
                  placeholder="0000"
                  value={formData.blockArea}
                  onChange={handleInputChange}
                />
                <div className={styles.Divider}></div>
                <select
                  name="blockAreaUnit"
                  value={formData.blockAreaUnit}
                  onChange={handleInputChange}
                >
                  <option value="Sq.ft">Sq.ft</option>
                  <option value="Sq.m">Sq.m</option>
                  <option value="Acres">Acres</option>
                </select>
              </div>
              {errors.blockArea && (
                <p className={styles.error}>{errors.blockArea}</p>
              )}
            </div>

            {/* Block Width */}
            <div>
              <label className={styles.fieldSubHeading} htmlFor="block_Width">
                Block Width (1-5000)
              </label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="block_Width"
                  name="blockWidth"
                  placeholder="0000"
                  value={formData.blockWidth}
                  onChange={handleInputChange}
                />
                <div className={styles.Divider}></div>
                <select
                  name="blockWidthUnit"
                  value={formData.blockWidthUnit}
                  onChange={handleInputChange}
                >
                  <option value="mm">mm</option>
                  <option value="m">m</option>
                </select>
              </div>
              {errors.blockWidth && (
                <p className={styles.error}>{errors.blockWidth}</p>
              )}
            </div>

            {/* Block Length */}
            <div>
              <label className={styles.fieldSubHeading} htmlFor="block_Length">
                Block Length (1-5000)
              </label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="block_Length"
                  name="blockLength"
                  placeholder="0000"
                  value={formData.blockLength}
                  onChange={handleInputChange}
                />
                <div className={styles.Divider}></div>
                <select
                  name="blockLengthUnit"
                  value={formData.blockLengthUnit}
                  onChange={handleInputChange}
                >
                  <option value="mm">mm</option>
                  <option value="m">m</option>
                </select>
              </div>
              {errors.blockLength && (
                <p className={styles.error}>{errors.blockLength}</p>
              )}
            </div>
          </div>

          {/* Block Height & Joint Width */}
          <div className={styles.secondBlock}>
            <p className={styles.fieldHeading}>
              Enter block height & joint width
            </p>
            <div className={styles.secondBlockInnerDiv}>
              <div>
                <label
                  className={styles.fieldSubHeading}
                  htmlFor="block_Height"
                >
                  Block Height
                </label>
                <div className={styles.InputDropdownBox}>
                  <input
                    name="blockHeight"
                    type="number"
                    id="block_Height"
                    placeholder="0000"
                    value={formData.blockHeight}
                    onChange={handleInputChange}
                  />
                  <div className={styles.Divider}></div>
                  <select
                    name="blockHeightUnit"
                    value={formData.blockHeightUnit}
                    onChange={handleInputChange}
                  >
                    <option value="mm">mm</option>
                    <option value="m">m</option>
                  </select>
                </div>
                {errors.blockHeight && (
                  <p className={styles.error}>{errors.blockHeight}</p>
                )}
              </div>

              <div>
                <label className={styles.fieldSubHeading} htmlFor="joint_Width">
                  Joint Width (1-5000)
                </label>
                <div className={styles.InputDropdownBox}>
                  <input
                    name="jointWidth"
                    type="number"
                    id="joint_Width"
                    placeholder="0000"
                    step="0.01"
                    value={formData.jointWidth}
                    onChange={handleInputChange}
                  />
                  <div className={styles.Divider}></div>
                  <select
                    name="jointWidthUnit"
                    value={formData.jointWidthUnit}
                    onChange={handleInputChange}
                  >
                    <option value="mm">mm</option>
                    <option value="m">m</option>
                  </select>
                </div>
                {errors.jointWidth && (
                  <p className={styles.error}>{errors.jointWidth}</p>
                )}
              </div>
            </div>
          </div>

          <button className={styles.subButton}>Submit</button>
        </form>
        <div className={styles.rightSection}>
          <div className={styles.subHeading}>Required Block Joint Filler</div>
          <div className={styles.productContainer}>
            <AnimatePresence>
              {mortarProduct?.mortarRequired > 0 && (
                <motion.div
                  key="mortar"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  className={styles.productCard}
                >
                  <img
                    src={mortarProduct?.img || "/placeholder-mortar.png"}
                    alt={mortarProduct?.name}
                    className={styles.productImg}
                  />
                  <p className={styles.productName}>{mortarProduct?.name}</p>
                  <p className={styles.productQty}>
                    {mortarProduct?.mortarRequired} kg
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.beforeDesc}>
            Fill in the requirement on the left <br /> to display the quantity
            required
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockJointMortarCalculator;
