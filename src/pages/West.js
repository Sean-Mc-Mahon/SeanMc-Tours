import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
//images
import Cliffs2 from "../img/cliffs/cliffs_2.jpg";
import Burren1 from "../img/cliffs/burren_1.jpg";
import Kilmac1 from "../img/cliffs/kilmac_1.jpg";
import Gal1 from "../img/cliffs/gal_1.jpeg";
//Links
import { Link } from "react-router-dom";

const West = () => {
  return (
    <div>
      <MoherWrapper>
        <Link className="link" to="/cliffs">
          <div className="tour-title">
            <h1>Cliffs of Moher</h1>
          </div>
        </Link>
      </MoherWrapper>
      <BurrenWrapper>
        <Link className="link" to="/burren">
          <div className="tour-title">
            <h1>The Burren</h1>
          </div>
        </Link>
      </BurrenWrapper>
      <KilmacWrapper>
        <Link className="link" to="/kilmac">
          <div className="tour-title">
            <h1>Kilmacduagh</h1>
          </div>
        </Link>
      </KilmacWrapper>
      <GalWrapper>
        <Link className="link" to="/gal">
          <div className="tour-title">
            <h1>Galway</h1>
          </div>
        </Link>
      </GalWrapper>
    </div>
  );
};

const MoherWrapper = styled(motion.div)`
  height: 22.5vh;
  overflow: hidden;
  background-image: url(${Cliffs2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .tour-title {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: var(--white);
    margin: 0;
  }
`;

const BurrenWrapper = styled(MoherWrapper)`
  background-image: url(${Burren1});
`;

const KilmacWrapper = styled(MoherWrapper)`
  background-image: url(${Kilmac1});
`;

const GalWrapper = styled(MoherWrapper)`
  background-image: url(${Gal1});
`;

export default West;
