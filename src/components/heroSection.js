import React from "react";
import Image from "next/image";
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
              Hi there! I'm Yashwanth Bharadwaj, a passionate Frontend Developer
              and Graphic Designer with a solid 1-year track record in the
              industry. Proficient in React.js, HTML, CSS, Bootstrap, Wix, and
              WordPress, I've garnered over 4 lakhs+ in earnings through
              freelancing. My journey in tech has been marked by creativity,
              problem-solving, and a commitment to delivering top-notch designs
              and user-friendly interfaces.
            </p>
          </div>
        </div>

        

        <div
          className={styles.heroCta}
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor=".heroShortIntro"
        >
          <Link to="dev" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check Out My Work!</button>
          </Link>

          <a
            href="https://drive.google.com/file/d/1kcDs4Jfc-x1k9ga5b0B-wbcy1WxmAn6C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            View My RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
