import PropTypes from "prop-types";
import styles from "./Group.module.css";

const Group = ({ className = "" }) => {
  return (
    <div className={[styles.group10, className].join(" ")}>
      <div className={styles.group3}>
        <div className={styles.rectangle12} />
        <div className={styles.h3featureTitle35Wrapper}>
          <h3 className={styles.h3featureTitle35}>Digital Clinic</h3>
        </div>
        <div className={styles.paragraph5}>
          Online site to showcase services..........
        </div>
      </div>
      <img
        className={styles.maskgroup2Icon}
        loading="lazy"
        alt=""
        src="/maskgroup-2@2x.png"
      />
      <img className={styles.receptionIcon} alt="" src="/reception@2x.png" />
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
