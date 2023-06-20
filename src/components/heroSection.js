import React from "react";

import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p data-aos="fade-down">Hi! my name is Hrithik, I love</p>
          <h1 data-aos="fade-down" data-aos-delay="200">
            building <span className={styles.heroColor}>products</span> and{" "}
            <span className={styles.heroColor2}>experiences</span>.
          </h1>
          <div className={styles.heroShortIntro}>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-anchor=".heroIntro"
            >
              I&#39;m a Human-Computer Interaction & UX Student at University of Michigan-Ann Arbor.
            </p>
            <p>
            I have experience doing user experience design & research, creating app design, and visual design.
            I am currently looking for an internship or job for the summer of 2023 to further build on my Product/UX design & research, interaction design, and product management skills.
            </p>
            
          </div>
        </div>
        <div
          className={styles.heroCta}
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor=".heroShortIntro"
        >
          <Link to="dev-project" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check out my works!</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1HUWFbSHpUsDPKxRulOgoVxI4YuHGsUgX/view?usp=sharing"
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
