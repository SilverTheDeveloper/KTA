import React, { useEffect, useState } from "react";
import styles from "../BlockJointMortarCalculator/BlockJointMortarCalculator.module.scss";
import { L_TO_MCUBE, MM_TO_M, SQFT_TO_METERSQ_CONST } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function JointFillerCalculator({ allProducts, activeCategory }) {
  const [errors, setErrors] = useState({});
  const [groutTile, setGroutTile] = useState({});
  const [epoxyTile, setEpoxyTile] = useState({});

  const [formData, setFormData] = useState({
    tileArea: "",
    tileAreaUnit: "Sq.ft",
    tileLength: "",
    tileLengthUnit: "mm",
    tileWidth: "",
    tileWidthUnit: "mm",
    tileThickness: "",
    tileThicknessUnit: "mm",
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
      "tileArea",
      "tileWidth",
      "tileLength",
      "tileThickness",
      "jointWidth",
    ].forEach((field) => {
      const value = formData[field];
      if (!value) {
        newErrors[field] = "This field is required.";
      } else if (Number(value) == 0) {
        newErrors[field] = "Enter a value greater than 0.";
      } else if (Number(value) < 0) {
        newErrors[field] = "Value cannot be negative.";
      } else if (
        Number(value) > MAX_VALUE &&
        field !== "jointWidth" &&
        field !== "tileThickness"
      ) {
        newErrors[field] = `Value cannot exceed ${MAX_VALUE}.`;
      } else if (
        (field === "jointWidth" || field === "tileThickness") &&
        Number(value) > 5000
      ) {
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
    if (!validateInputs()) {
      console.log(errors);
      return;
    }

    let areaInMetre =
      formData["tileAreaUnit"] === "Sq.m"
        ? ConvertToDouble(formData["tileArea"])
        : ConvertToDouble(formData["tileArea"]) * SQFT_TO_METERSQ_CONST;
    let tileLengthInMetre =
      formData["tileLengthUnit"] === "m"
        ? ConvertToDouble(formData["tileLength"])
        : ConvertToDouble(formData["tileLength"]) * MM_TO_M;
    let tileWidthInMetre =
      formData["tileWidthUnit"] === "m"
        ? ConvertToDouble(formData["tileWidth"])
        : ConvertToDouble(formData["tileWidth"]) * MM_TO_M;
    let tileThicknessInMetre =
      formData["tileThicknessUnit"] === "m"
        ? ConvertToDouble(formData["tileThickness"])
        : ConvertToDouble(formData["tileThickness"]) * MM_TO_M;
    let jointWidthNnMetre =
      formData["jointWidthUnit"] === "m"
        ? ConvertToDouble(formData["jointWidth"])
        : ConvertToDouble(formData["jointWidth"]) * MM_TO_M;

    let volume =
      areaInMetre *
      jointWidthNnMetre *
      tileThicknessInMetre *
      (1 / tileLengthInMetre + 1 / tileWidthInMetre);

    let volumeInLetre = volume * L_TO_MCUBE;

    const groutTileRequired = (
      volumeInLetre * (groutTile?.density || 0)
    ).toFixed(2);

    const epoxyTileRequired = (
      volumeInLetre * (epoxyTile?.density || 0)
    ).toFixed(2);

    console.log(groutTileRequired);
    console.log(epoxyTileRequired);
    setEpoxyTile({ ...epoxyTile, epoxyTileRequired });
    setGroutTile({ ...groutTile, groutTileRequired });
  };

  useEffect(() => {
    if (!allProducts || allProducts.length === 0) return;

    const groutProduct = allProducts.find(
      (product) => product?.name === "KTA Polymer Grout"
    );
    if (groutProduct) {
      setGroutTile(groutProduct);
    }

    const epoxyProduct = allProducts.find(
      (product) => product?.name === "KTA Epoxy"
    );
    if (epoxyProduct) {
      setEpoxyTile(epoxyProduct);
    }
  }, [allProducts]);

  // separate effect to log when values actually update
  useEffect(() => {
    console.log("GroutTile:", groutTile);
    console.log("EpoxyTile:", epoxyTile);
  }, [groutTile, epoxyTile]);

  return (
    <div>
      <div className={styles.headingDiv}>
        <div className={styles.Heading}>{activeCategory?.name}</div>
        <div className={styles.subHeading}>
          A tool to estimate the right quantity of tile joint filler for your
          requirements.
        </div>
      </div>

      <div className={styles.calcWindow}>
        <form className={styles.leftSection} onSubmit={handleSubmit}>
          <div className={styles.firstBlock}>
            <p className={styles.fieldHeading}>
              Enter Area, Tile Width & Length
            </p>

            {/* Tile Area */}
            <div>
              <label className={styles.fieldSubHeading} htmlFor="total_Area">
                Total Tiled Area
              </label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="total_Area"
                  name="tileArea"
                  placeholder="0000"
                  onChange={handleInputChange}
                />
                <div className={styles.Divider}></div>
                <select
                  name="tileAreaUnit"
                  value={formData.tileAreaUnit}
                  onChange={handleInputChange}
                >
                  <option value="Sq.ft">Sq.ft</option>
                  <option value="Sq.m">Sq.m</option>
                </select>
              </div>
              {errors.tileArea && (
                <p className={styles.error}>{errors.tileArea}</p>
              )}
            </div>

            {/* Tile Width */}
            <div>
              <label className={styles.fieldSubHeading} htmlFor="tile_Width">
                Tile Width
              </label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="tile_Width"
                  name="tileWidth"
                  placeholder="0000"
                  onChange={handleInputChange}
                />
                <div className={styles.Divider}></div>
                <select
                  name="tileWidthUnit"
                  value={formData.tileWidthUnit}
                  onChange={handleInputChange}
                >
                  <option value="mm">mm</option>
                  <option value="m">m</option>
                </select>
              </div>
              {errors.tileWidth && (
                <p className={styles.error}>{errors.tileWidth}</p>
              )}
            </div>

            {/* Tile Length */}
            <div>
              <label className={styles.fieldSubHeading} htmlFor="tile_Length">
                Tile Length
              </label>
              <div className={styles.InputDropdownBox}>
                <input
                  type="number"
                  id="tile_Length"
                  name="tileLength"
                  placeholder="0000"
                  onChange={handleInputChange}
                />
                <div className={styles.Divider}></div>
                <select
                  name="tileLengthUnit"
                  value={formData.tileLengthUnit}
                  onChange={handleInputChange}
                >
                  <option value="mm">mm</option>
                  <option value="m">m</option>
                </select>
              </div>
              {errors.tileLength && (
                <p className={styles.error}>{errors.tileLength}</p>
              )}
            </div>
          </div>

          <div className={styles.secondBlock}>
            <p className={styles.fieldHeading}>
              Enter Joint Width & Tile Thickness
            </p>
            <div className={styles.secondBlockInnerDiv}>
              {/* Joint Width */}
              <div>
                <label className={styles.fieldSubHeading} htmlFor="joint_Width">
                  Joint Width
                </label>
                <div className={styles.InputDropdownBox}>
                  <input
                    type="number"
                    id="joint_Width"
                    placeholder="0000"
                    name="jointWidth"
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

              {/* Tile Thickness */}
              <div>
                <label
                  className={styles.fieldSubHeading}
                  htmlFor="tile_Thickness"
                >
                  Tile Thickness / Joint Depth
                </label>
                <div className={styles.InputDropdownBox}>
                  <input
                    type="number"
                    id="tile_Thickness"
                    placeholder="0000"
                    name="tileThickness"
                    onChange={handleInputChange}
                  />
                  <div className={styles.Divider}></div>
                  <select
                    name="tileThicknessUnit"
                    value={formData.tileThicknessUnit}
                    onChange={handleInputChange}
                  >
                    <option value="mm">mm</option>
                    <option value="m">m</option>
                  </select>
                </div>
                {errors.tileThickness && (
                  <p className={styles.error}>{errors.tileThickness}</p>
                )}
              </div>
            </div>
          </div>

          <button className={styles.subButton}>Submit</button>
        </form>

        <div className={styles.rightSection}>
          <div className={styles.subHeading}>Required Tile Joint Filler</div>
          <div className={styles.productContainer}>

            <AnimatePresence>

              {groutTile?.groutTileRequired > 0 && (
                <motion.div
                  key="grout"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  className={styles.productCard}
                >
                  <img
                    src={groutTile?.img || "/placeholder-grout.png"}
                    alt={groutTile?.name}
                    className={styles.productImg}
                  />
                  <p className={styles.productName}>{groutTile?.name}</p>
                  <p className={styles.productQty}>
                    {groutTile?.groutTileRequired} kg
                  </p>
                </motion.div>
              )}

              {epoxyTile?.epoxyTileRequired > 0 && (
                <>
                  <motion.div
                    key="epoxy"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className={styles.productCard}
                  >
                    <img
                      src={epoxyTile?.img || "/placeholder-epoxy.png"}
                      alt={epoxyTile?.name}
                      className={styles.productImg}
                    />
                    <p className={styles.productName}>{epoxyTile?.name}</p>
                    <p className={styles.productQty}>
                      {epoxyTile?.epoxyTileRequired} kg
                    </p>
                  </motion.div>



                </>
              )}



            </AnimatePresence>
</div>
            {(groutTile?.groutTileRequired > 0) && (
              <div className={styles.BlockDisp}>
              <br />
              <div>*Above quantity is basis calculations under simulated conditions.
                Can vary as per surface type and site conditions.</div>
              <br />
              <Link to={"/app/contact"}>
                <button className={styles.subButton}>Contact US</button>
              </Link>
            </div>)}

          
          {(groutTile?.groutTileRequired == 0 ||
            groutTile?.groutTileRequired == null) && (
              <div>
                <div className={styles.beforeDescDesk}>
                  Fill in the requirement on the left <br /> to display the quantity
                  required
                </div>
                <div className={styles.beforeDescMob}>
                  Fill in the requirement on the top <br /> to display the quantity
                  required
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default JointFillerCalculator;
