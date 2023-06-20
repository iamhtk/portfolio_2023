import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.scss";
import Me from "../../public/images/new_images/mychicago.jpeg";

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
                Hi! I&#39;m Hrithik Sanyal. I&#39;m a first-year graduate student at the 
                School of Information, at the University of Michigan studying UX Design & Research and Human-Computer Interaction. 
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                I aspire to craft meaningful interactions between people and technology and solve problems in creative, empathetic ways. I enjoy creating digital illustrations/designs and music in my free time.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                I come from a multidisciplinary background, with experience in programming and designing.
                </p>
                <p data-aos="fade-up" data-aos-delay="500">
                Previously, I was appointed as a Graduate Student Instructor for SI 658: Information Architecture last Winter 2023 semester.
                </p>
              </div>

              <div className={styles.aboutImage}>
                <Image
                  src={Me}
                  alt="Picture of Hrithik Sanyal - Product/UX Designer"
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
                  <h2>UX Tools</h2>
                  <p>Adobe Creative Suite</p>
                  <p>Miro</p>
                  <p>Wireframe.cc</p>
                  <p>Illustrator</p>
                  <p>Lightroom</p>
                  <p>Adobe XD</p>
                  <p>Photoshop</p>
                  <p>Sketch</p>
                  <p>InVisio</p>
                  <p>Principle</p>
                  <p>FigJam</p>
                  <p>Figma</p>
                  <p>Adobe After Effects</p>
                  <p>Premier Pro</p>
                  <p>Apple Motion</p>
                  <p>Final Cut Pro</p>
                  <p>Axure</p>
                </div>

                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#b44bff" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2>UX Research methods</h2>
                  <p>Infinity Walls</p>
                  <p>Affinity Wall Construction</p>
                  <p>Brainstorming Solutions</p>
                  <p>Background Research</p>
                  <p>QOC</p>
                  <p>Story Mapping</p>
                  <p>Low-Fi Prototyping</p>
                  <p>High-Fi Prototyping</p>
                  <p>Wireframes</p>
                  <p>Personas</p>
                  <p>User research methodologies</p>
                  <p>Usability testing</p>
                  <p>Qualitative testing</p>
                  <p>Quantitative testing</p>
                  <p>Discoverability testing</p>
                </div>
                
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#911ae5" }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h2>Design Tools</h2>
                  <p>C/C++</p>
                  <p>Python</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Oracle</p>
                  <p>MySQL</p>
                  <p>JavaScript</p>
                  <p>XCode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
