import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import Group from "../components/Group";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./HOME.module.css";

const HOME = () => {
  return (
    <div className={styles.home2}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <FrameComponent />
      <section className={styles.component1Parent}>
        <div className={styles.component1}>
          <GroupComponent />
        </div>
        <div className={styles.ehs}>
          <div className={styles.group4}>
            <div className={styles.rectangle13} />
            <div className={styles.h3featureTitle32}>
              <p className={styles.ehs1}>
                <b>EHS</b>
              </p>
              <p className={styles.electronicHealthSystem}>
                (electronic health system)
              </p>
            </div>
            <div className={styles.paragraph2Wrapper}>
              <div className={styles.paragraph2}>
                Will offer all sorts of patient tracking........
              </div>
            </div>
          </div>
          <img
            className={styles.healthReport2Icon}
            loading="lazy"
            alt=""
            src="/healthreport2@2x.png"
          />
        </div>
        <div className={styles.digitalclinic}>
          <Group />
        </div>
        <div className={styles.patientmonetring}>
          <div className={styles.group9}>
            <GroupComponent1
              hospital="Patient"
              management="Monitoring"
              paragraph="Here you can view all bookings.........."
              propAlignSelf="unset"
            />
          </div>
          <img
            className={styles.medicalExaminer1Icon}
            loading="lazy"
            alt=""
            src="/medicalexaminer1@2x.png"
          />
        </div>
        <div className={styles.softwaresolutions}>
          <div className={styles.group6}>
            <div className={styles.rectangle15} />
            <h3 className={styles.h3featureTitle33}>Software Solutions</h3>
            <div className={styles.paragraph3Wrapper}>
              <div className={styles.paragraph3}>
                All this combined into one full ........
              </div>
            </div>
          </div>
          <img
            className={styles.globalSolution1Icon}
            loading="lazy"
            alt=""
            src="/globalsolution1@2x.png"
          />
        </div>
      </section>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.copyrightraphaWrapper}>
            <div className={styles.copyrightrapha}>
              <span>{`Copyright © `}</span>
              <span className={styles.rapha}>Rapha+</span>
            </div>
          </div>
          <div className={styles.designeddeveloprdbyraphaWrapper}>
            <div className={styles.designeddeveloprdbyrapha}>
              <span>{`Designed & developrd by`}</span>
              <span className={styles.rapha1}> rapha+</span>
            </div>
          </div>
          <div className={styles.socialMediaIconsWrapper}>
            <div className={styles.socialMediaIcons}>
              <img
                className={styles.instgramIcon}
                loading="lazy"
                alt=""
                src="/instgram@2x.png"
              />
              <img
                className={styles.linkedinIcon}
                loading="lazy"
                alt=""
                src="/linkedin@2x.png"
              />
              <img
                className={styles.twitterIcon}
                loading="lazy"
                alt=""
                src="/twitter@2x.png"
              />
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/facebook@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOME;
