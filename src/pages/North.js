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
import ScrollTop from "../components/ScrollTop";
//images
import Dun1 from "../img/cwy/dun_1.webp";
import Dun1s from "../img/cwy/dun_1s.webp";
import Dun1m from "../img/cwy/dun_1m.webp";
import Cwy1 from "../img/cwy/cwy_1.webp";
import Cwy1s from "../img/cwy/cwy_1s.webp";
import Cwy1m from "../img/cwy/cwy_1m.webp";
import Dark1 from "../img/cwy/dark_1.webp";
import Dark1s from "../img/cwy/dark_1s.webp";
import Dark1m from "../img/cwy/dark_1m.webp";
import Bel1 from "../img/cwy/bel_1.webp";
import Bel1s from "../img/cwy/bel_1s.webp";
import Bel1m from "../img/cwy/bel_1m.webp";
//Links
import { Link } from "react-router-dom";

const North = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <TourWrapper
        id="duluce-wrapper"
        variants={TourAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/dun">
            <img
              src={Dun1s}
              alt="Dunluce"
              srcSet={`${Dun1s} 400w, ${Dun1m} 800w, ${Dun1} 1200w`}
            />
            <h1>Dunluce Castle</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="causeway-wrapper"
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/cwy">
            <img
              src={Cwy1s}
              alt="Causeway"
              srcSet={`${Cwy1s} 400w, ${Cwy1m} 800w, ${Cwy1} 1200w`}
            />
            <h1>Giant's Causeway</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="dark-wrapper"
        variants={TourAnim2}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/dark">
            <img
              src={Dark1s}
              alt="Dark Hedges"
              srcSet={`${Dark1s} 400w, ${Dark1m} 800w, ${Dark1} 1200w`}
            />
            <h1>Dark Hedges</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="belfast-wrapper"
        variants={TourAnim3}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/bel">
            <img
              src={Bel1s}
              alt="Belfast"
              srcSet={`${Bel1s} 400w, ${Bel1m} 800w, ${Bel1} 1200w`}
            />
            <h1>Belfast</h1>
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

export default North;
