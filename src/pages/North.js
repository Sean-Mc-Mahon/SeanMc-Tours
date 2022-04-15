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
import Border from "../img/cwy/border.jpg";
//Links
import { Link } from "react-router-dom";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

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
      <TourRoute className="tour-route">
        <Row>
          <Col className="info-description">
            <h5 className="green">Departure</h5>
            <p>
              The Cliffs tour leaves at 6:45 from the Hugh Lane Gallery on
              Parnell Square, it is advised to arrive about 10 minutes early.
            </p>
            <h5 className="green">To the Causeway...</h5>
            <p>
              Once we leave Dublin we will head straight up North. We cross teh
              border usually just before 8am. The sign as we enter the North has
              been heavily vandalised and there is no corresponding sign on the
              other side of the road, this is possibly due to the large amount
              of Irish republicans in the North who would rather not acknowledge
              any seperation between their homes and the Republic of Ireland.
            </p>
            <Col xl={6} className="image">
              <img src={Border} alt="Border" />
              <div className="photo-description">
                <div className="photo-title">
                  <em>Northern Ireland Border</em>
                </div>
                <div className="photo-link">
                  Source:
                  <a href="https://www.reuters.com/world/uk/uk-says-substantial-differences-remain-with-eu-over-nireland-trade-2021-10-23/">
                    Reuters
                  </a>
                </div>
              </div>
            </Col>
            <p>
              {" "}
              Our first stop is a service station just south of Belfast where
              you can pick up some breakfast and snacks. There are food
              facilites at the causeway but if you would rather bring your own
              snacks this is a good chance to do so.
            </p>
          </Col>
        </Row>
        <Row>
          <p>
            Before we visit the Causeway we will make a brief photo stop at{" "}
            <Link className="green" to="/dun">
              <strong>Dunluce Castle</strong>
            </Link>
            , a beautiful 16th century ruin overlooking the Irish sea.
          </p>
          <p>
            From Dunluce we are just a ten minute drive from the{" "}
            <Link className="green" to="/cwy">
              <strong>Giant's Causeway</strong>
            </Link>
            . Along the way we will pass the town of Bushmills, home to the
            oldest licensed whiskey distillery in the world.
          </p>
          <h5 className="green">Ater the Causeway...</h5>
          <p>
            From the causeway we will continue along the antrim coastline,
            passing dunsverick castle and Whiteparl Bay until we reach the
            viewing platform at Portaneevy where we will have a stunning view of
            the Rathlin Island and if the conditions are clear Scotland. From
            this point we will be just 14 kilometers from Scotland.
          </p>

          <Row>
            <Col xl={6} className="info-description">
              <h5 className="green">Game of Thrones</h5>
              <p>
                Game of Thrones used locations from all over Northern Ireland to
                create Westeros. Most scenes south of the wall in the show were
                filmed in Northern Ireland and the Antrim coastline was used
                extensively, primarily as the Iron Islands but also for other
                locations.
              </p>
            </Col>
            <Col xl={6} className="image">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/U_9bivtHwn8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="photo-description">
                <div className="photo-title">
                  <em>Ballintoy Harbour/Iron Islands</em>
                </div>
              </div>
            </Col>
            <Col xl={6} className="image">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/IccqnH7VJjk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="photo-description">
                <div className="photo-title">
                  <em>Ballintoy Harbour/Iron Islands</em>
                </div>
              </div>
            </Col>
            <Col xl={6} className="image">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/ZTNDHf5AXr4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="photo-description">
                <div className="photo-title">
                  <em>Whitepark Bay/The Burning of the Old Gods</em>
                </div>
              </div>
            </Col>
          </Row>

          <p>
            Our next stop is the{" "}
            <Link className="green" to="/dark">
              <strong>Dark Hedges</strong>
            </Link>
            , a game of Thrones filming location and beautiful sight in it's own
            right. Along the way I will explain the significance of the show to
            Northern Ireland and the extent to which the entire country was used
            in it's production.
          </p>
          <Col xl={6} className="image">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/lvDzBAy2wN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="photo-description">
              <div className="photo-title">
                <em>Dark Hedges/Kings Landing Entry</em>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Our final stop is{" "}
              <Link className="green" to="/bel">
                <strong>Belfast</strong>
              </Link>
              , where you go here depends on which tour you have booked.
              Passengers on our Titanic Tour will be brought to the Titanic
              museum where you can learn all about life at the shipyard as well
              as life on board the ship. Passengers on the regular Causeway tour
              will have free time to spend how you wish in Belfast.
            </p>
            <h5 className="green">Back to Dublin</h5>
            <p>
              Once we're all back on board after Belast we will drive back to
              Dublin, crossing the border at around 6:15pm getting you back to
              Dublin around 7:30pm.
            </p>
          </Col>
        </Row>
      </TourRoute>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 22.5vh;
  overflow: hidden;
`;

const TourRoute = styled(motion.div)`
  text-align: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  .tour-route {
    text-align: center;
  }
`;

export default North;
