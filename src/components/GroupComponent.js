import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <GroupComponent1
        hospital="Hospital"
        management="Management"
        paragraph="A management software that helps you........"
      />
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <img className={styles.hospital2Icon} alt="" src="/hospital-2@2x.png" />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
