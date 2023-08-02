import React from "react";

import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p data-aos="fade-down">Hi!  I&#39;m Hrithik Sanyal. I love</p>
          <h1 data-aos="fade-down" data-aos-delay="200">
            building <span className={styles.heroColor}>products</span> and{" "}
            <span className={styles.heroColor2}>experiences</span>.
          </h1>
          <div className={styles.heroShortIntro}>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-anchor=".heroIntro"
            >I&#39;m a </p>
              <p>Human-Computer Interaction, UX Design & Research Student, and Social Computing track at </p>
              <p><h3>School of Information (UMSI), University of Michigan-Ann Arbor.</h3></p>
            <p></p>
            <p></p>
            <p></p>
            <p>I have experience doing user experience design & research, creating app design, and visual design.</p>
            <p>Currently working as <h3>Information Architecture Intern at The Understanding Group (TUG)</h3></p> 
            
            <p></p>
            <p></p>
            <p></p>
            <p>Looking for Internship/CO-OP Opportunities for Fall 2023 to further build on my Product/UX Design & Research, Interaction Design, and Product Management Skills.</p>
          </div>
        </div>
        <div
          className={styles.heroCta}
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor=".heroShortIntro"
        >
          <Link to="dev-project" smooth={true} className={styles.heroCtaButtonLink}>
            <button>My Designs!</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/13UKZPhcuo1Cx4jESNyO2J45vpmY4IOsa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
