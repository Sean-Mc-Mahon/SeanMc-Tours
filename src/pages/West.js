import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  TourAnim,
  TourAnim1,
  TourAnim2,
  TourAnim3,
} from "../animation";
//images
import Cliffs2 from "../img/cliffs/cliffs_2.webp";
import Cliffs2s from "../img/cliffs/cliffs_2s.webp";
import Cliffs2m from "../img/cliffs/cliffs_2m.webp";
import Burren1 from "../img/cliffs/burren_1.webp";
import Burren1s from "../img/cliffs/burren_1s.webp";
import Burren1m from "../img/cliffs/burren_1m.webp";
import Kilmac1 from "../img/cliffs/kilmac_1.webp";
import Kilmac1s from "../img/cliffs/kilmac_1s.webp";
import Kilmac1m from "../img/cliffs/kilmac_1m.webp";
import Gal1 from "../img/cliffs/gal_1.webp";
import Gal1s from "../img/cliffs/gal_1s.webp";
import Gal1m from "../img/cliffs/gal_1m.webp";
//Links
import { Link } from "react-router-dom";

const West = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <TourWrapper
        id="moher-wrapper"
        variants={TourAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/cliffs">
            <img
              src={Cliffs2s}
              alt="Cliffs"
              srcSet={`${Cliffs2s} 400w, ${Cliffs2m} 800w, ${Cliffs2} 1200w`}
            />
            <h1>Cliffs of Moher</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="burren-wrapper"
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/burren">
            <img
              src={Burren1s}
              alt="Burren"
              srcSet={`${Burren1s} 400w, ${Burren1m} 800w, ${Burren1} 1200w`}
            />
            <h1>The Burren</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="kilmacduagh-wrapper"
        variants={TourAnim2}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/kilmac">
            <img
              src={Kilmac1s}
              alt="Kilmacduagh"
              srcSet={`${Kilmac1s} 400w, ${Kilmac1m} 800w, ${Kilmac1} 1200w`}
            />
            <h1>Kilmacduagh</h1>
          </Link>
        </div>
      </TourWrapper>

      <TourWrapper
        id="galway-wrapper"
        variants={TourAnim3}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/gal">
            <img
              src={Gal1s}
              alt="Galway"
              srcSet={`${Gal1s} 400w, ${Gal1m} 800w, ${Gal1} 1200w`}
            />
            <h1>Galway</h1>
          </Link>
        </div>
      </TourWrapper>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 22.5vh;
  overflow: hidden;
`;

export default West;
