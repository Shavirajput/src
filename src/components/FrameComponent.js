import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.home2Inner, className].join(" ")}>
      <div className={styles.whitetabParent}>
        <div className={styles.whitetab} />
        <div className={styles.frameWrapper}>
          <div className={styles.iconsParent}>
            <div className={styles.icons}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.aboutUs}>
              <div className={styles.homeaboutservicepagescontactus}>
                Home About Service Pages Contact Us
              </div>
              <div className={styles.sliderWrapper}>
                <img
                  className={styles.sliderIcon}
                  loading="lazy"
                  alt=""
                  src="/slider.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.login}>
          <a className={styles.login1}>Login</a>
        </button>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
