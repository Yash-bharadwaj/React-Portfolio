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
                Passionate about crafting digital experiences, I am a Web Developer and Graphic Designer fueled by creativity and a commitment to excellence. Armed with a degree in Computer Engineering (2019 - 2023), my journey has unfolded into a 2-year track record of turning concepts into captivating designs. Proficient in React.js, HTML, CSS, Bootstrap, Wix, and WordPress, I've not only mastered technologies but translated this expertise into a remarkable 4 lakhs+ in freelancing earnings.
                </p>
               
                <p data-aos="fade-up" data-aos-delay="400">In roles ranging from a Front-End Developer for our college website to a current intern in a German-based company, I've transformed challenges into opportunities. Every project becomes a canvas for pushing creative boundaries and delivering results that inspire. As I continue navigating the dynamic realm of technology, I am driven by a passion to create transformative experiences, leaving an indelible mark on the world of web development and design.</p>
               
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
