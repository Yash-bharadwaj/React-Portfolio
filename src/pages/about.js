import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.scss";
import Me from "../../public/images/Tomcy.jpg";

export default function About() {
  return (
    <>
      <main>
        <div className={styles.detailsSection}>
          <div className={styles.about}>
            <h1 data-aos="fade-up">About Me</h1>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutInfo}>
                {/* eslint-disable react/no-unescaped-entities */}
                <p data-aos="fade-up" data-aos-delay="200">
                  I&apos;m a self-taught Web-Devloper and Graphic Designer. I have pursued my
                  Bachelor&apos;s Degree in Computer Engineering from Andhra
                  University, graduation in 2023.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  I have more than a year of experience as a Web-Developer. I&apos;ve worked as
                  a freelance designer and helped many clients and colleagues bring their ideas to life. I also worked as a
                  Front-End developer for our official college website. I am currently working in a German-based company as a Frontend Developer Intern (From Sept 2023 to March 2024).
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  I&apos;m a passionate Frontend Developer and Graphic Designer with a solid 2-year track record in the industry. Proficient in React.js, HTML, CSS, Bootstrap, Wix, and WordPress, I&apos;ve garnered over 4 lakhs+ in earnings through freelancing. My journey in tech has been marked by creativity, problem-solving, and a commitment to delivering top-notch designs and user-friendly interfaces.
                </p>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src={Me}
                  alt="Picture of Yashwanth Bharadwaj - FullStack Developer"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skillsContainer}>
              <h1 data-aos="fade-up">Skills</h1>
              <div className={styles.skillCards}>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#cf92fb" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Expertise</h2>
                  <p>UI UX Design</p>
                  <p>Graphic Design</p>
                  <p>Web Development</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#b44bff" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2>Tech Stack</h2>
                  <p>React Js</p>
                  <p>Javascript</p>
                  <p>Redux</p>
                  <p>Firebase</p>
                  <p>Styled Components</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#911ae5" }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h2>Design Tools</h2>
                  <p>Figma</p>
                  <p>Coreldraw</p>
                  <p>Canva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
