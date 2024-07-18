import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  className = "",
  hospital,
  management,
  paragraph,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={[styles.featureBackgroundsParent, className].join(" ")}>
      <div className={styles.featureBackgrounds} />
      <div className={styles.h3FeatureTitle3Wrapper} style={frameDivStyle}>
        <h3 className={styles.h3FeatureTitle3Container}>
          <p className={styles.hospital}>{hospital}</p>
          <p className={styles.management}>{management}</p>
        </h3>
      </div>
      <div className={styles.paragraph}>{paragraph}</div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  hospital: PropTypes.string,
  management: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default GroupComponent1;
