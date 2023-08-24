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
                <p data-aos="fade-up" data-aos-delay="200">
                  I&#39;m a self-taught Web-Devloper and Graphic Designer who is now
                  learning React JS. I have pursued my
                  Bachelor&#39;s Degree in Computer Engineering from Andhra
                  University, graduation in 2023.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  I have more than a year of experience in as a Web-Developer & user experience
                  designing . I&#39;ve worked as a freelance designer and helped
                  many clients, colleagues get their ideas designed. I worked as
                  a Front-End devloper for our official college website.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  I have 1.5 years of Web-Devloper expertise. As part of my
                  career, I have worked on a variety of Website Devlopement & design projects.
                  For the year 2023, I was the Technical Head of Carnival Festival in a resort.
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
