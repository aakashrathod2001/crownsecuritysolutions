import React from "react";
import styles from "./BrandsSlider.module.scss";

import BrandSlider from "@/components/UI/BrandSlider/BrandSlider";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";

const BrandsSlider = () => {
  return (
    <div className={styles.BrandsSlider}>
      <div className="full-width-container">
        <div className={styles.SectionHeader}>
          {/* Header */}
          <SectionHeader
            label=""
            title="Clients We have Worked With"
            highlightedWords={["Clients"]}
          />
        </div>
        <BrandSlider className={styles.brandSlider} speed={1.4} />
        <BrandSlider className={styles.brandSlider} direction="right" speed={1.4} />
      </div>
    </div>
  );
};

export default BrandsSlider;
