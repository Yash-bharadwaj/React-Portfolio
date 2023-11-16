import React from "react";

import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p data-aos="fade-down">Hi! my name is Yash, I love</p>
          <h1 data-aos="fade-down" data-aos-delay="200">
            Building <span className={styles.heroColor}>solutions</span> through{" "}
            <span className={styles.heroColor2}>Code</span>.
          </h1>
          <div className={styles.heroShortIntro}>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-anchor=".heroIntro"
            >
              A Computer Engineering graduate from Hyderabad, working as a
              freelance Software Developer since a year and currently
              building cool stuff with ReactJS.
            </p>
          </div>
        </div>
        <div
          className={styles.heroCta}
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor=".heroShortIntro"
        >
          <Link to="uiux" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check Out My Work!</button>
          </Link>
          
          <a
            href="https://drive.google.com/file/d/1V1jB_Cbl0_OpftLRb5vJdwDDKytIsXup/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
