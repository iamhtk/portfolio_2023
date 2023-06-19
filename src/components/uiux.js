import React from "react";
// import styles from "@/styles/UIUX.module.scss";

import styles from "@/styles/Dev.module.scss";

import { uxResearchProjects } from "../Shared/Data";
import Image from "next/image";

const UxCard = ({ uxProject }) => {
  const { image, projectName, projectDesc, projectLink } = uxProject;
  return (
    <div
      className={styles.uxCardContainer}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <a href={projectLink} target="_blank">
      <div className={styles.uxCardImage}>
        <Image src={image} alt="UI UX Projects" />
      </div>
      <div className={styles.uxCardInfo}>
        <h1>{projectName}</h1>
        <p>{projectDesc} </p>
      </div>
      </a>
    </div>
  );
};

const DevProjectCard = ({ development }) => {
  const { title, desc, link, stack, tools, image } = development;
  return (
    <div
      className={styles.devProjectCard}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <a href={link} target="_blank"> 
      <div className={styles.devProjectCardContainer}>
        <div className={styles.devProjectDetails}>
          <div className={styles.devProjectCardImage}>
            <Image src={image} alt={title} />
          </div>
          <div className={styles.devProjectCardTitle}>
            <h1>{title}</h1>
          </div>
          <div className={styles.devProjectCardDescription}>
            <p>{desc}</p>
          </div>
          <div className={styles.devProjectCardStack}>{stack}</div>
          <div className={styles.devProjectCardTools}>{tools}</div>
        </div>
        {/* <div className={styles.devProjectCardButton}>
          <a href={link} target="_blank" rel="noreferrer">
            <button>check out !</button>
          </a>
        </div> */}
      </div>
      </a>
    </div>
  );
};

const Gfx = () => {
  return (
    <div className={styles.devProjectContainer} id="uiux">
      <h1 data-aos="fade-up">Graphic Designs</h1>
      <div className={styles.devProjectGrid}>
        {uxResearchProjects.map((development) => {
          return <DevProjectCard key={development.id} development={development}  />;
        })}
      </div>
    </div>
  );
};

export default Gfx;
