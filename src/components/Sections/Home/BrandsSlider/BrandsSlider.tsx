import React from "react";
import styles from "./BrandsSlider.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import { headings } from "@/data/headings";
import BrandSlider from "@/components/UI/BrandSlider/BrandSlider";

const BrandsSlider = () => {
  return (
    <div className={styles.BrandsSlider}>
      <div className="full-width-container">
        <Heading data={headings.homeBrandsSliderSection} />
        <BrandSlider className={styles.brandSlider} speed={1.4} />
      </div>
    </div>
  );
};

export default BrandsSlider;
