// import { GfxDesigns } from "@/Shared/Data";
// import Image from "next/image";

// import styles from "@/styles/Gfx.module.scss";
// import { Carousel } from "@mantine/carousel";
// import { FaAngleLeft } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";
// // import { MdArrowBackIos } from "react-icons/md"
// // import { MdArrowForwardIos } from "react-icons/md"


// export default function Gfx() {
//   return (
//     <div className={styles.gfxContainer} id="gfx">
//       <h1 data-aos="fade-up">Graphic Designs</h1>

//       <div className={styles.gfxWorks}>
//         <Carousel
//           withIndicators
//           loop
//           withControls={false}
//           height={600}
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           {GfxDesigns.map((design) => {
//             return (
//               <Carousel.Slide key={design.id} alt="gfx" align="center">
//                 <Image src={design.path} alt="gfx" height={560} />
//               </Carousel.Slide>
//             );
//           })}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

import React from "react";
// import styles from "@/styles/UIUX.module.scss";

import styles from "@/styles/Dev.module.scss";

import { graphicDesigns } from "../Shared/Data";
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
    <a href={link} target="_blank">
      <div
        className={styles.devProjectCard}
        data-aos="fade-up"
        data-aos-delay="200"
      >
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
      </div>
    </a>
    );
  };

const UXResearch = () => {
  return (
    <div className={styles.devProjectContainer} id="uiux">
      <h1 data-aos="fade-up">UX Researches</h1>
      <div className={styles.devProjectGrid}>
        {graphicDesigns.map((development) => {
          return <DevProjectCard key={development.id} development={development}  />;
        })}
      </div>
    </div>
  );
};

export default UXResearch;
