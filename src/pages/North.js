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
import Bel1 from "../img/cwy/titanic_cab.jpg";
import Bel1s from "../img/cwy/titanic_cab.jpg";
import Bel1m from "../img/cwy/titanic_cab.jpg";
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

      {/* <TourWrapper
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
      </TourWrapper> */}
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
      <TourRoute className="tour-route">
        <Row>
          <Col className="info-description">
            <h5 className="green">Departure</h5>
            <p>
              <strong>7:00am</strong> at The Starbucks Cafe on Dame Street / 1
              College Green
              <br />
              <strong>7:05am</strong> at Dublin Bus Office, 59 O’Connell Street,
              Dublin 1
            </p>
            <h5 className="green">To the North...</h5>
            <p>
              Once we leave Dublin we will head straight up North. We cross the
              border usually around 8am. The sign as we enter the North has been
              heavily vandalised and there is no corresponding sign on the other
              side of the road, this is possibly due to the large amount of
              Irish republicans in the North who would rather not acknowledge
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
          </Col>
        </Row>
        <Row>
          <p>
            <strong>9:30am </strong>Arrival in Belfast. You can choose to enjoy
            the world-famous <strong>Black Taxi Tour</strong> of Belfast where
            your local guide will talk you through Belfast’s fascinating
            political history or visit the state of the art Belfast{" "}
            <strong>Titanic Experience</strong>.
          </p>
          <p>
            <strong>Option One:</strong> Visit and sign the Peace Line and join
            the list of world celebrities including Bill Clinton and the Dalai
            Lama who have signed their name to the wall. Walk along this huge
            wall which divides the two religious/national communities of east
            Belfast. The political murals, some of which are the most
            spectacular in the world, reflect a harrowing and tragic chapter in
            the history of Northern Ireland. Your personal local guide will
            relate to you their personal and family experiences of life in
            Belfast during The Troubles, some of the stories you quite simply
            won’t believe.
          </p>
          <p>
            <strong>Option Two:</strong> Your alternative to a Black Taxi Tour
            is to visit the Belfast Titanic quarter and the state of the art
            Titanic Visitor Experience. Here you can experience the entire life
            and story of the Titanic, from her fateful maiden voyage to her
            eventful discovery on the seabed of the North Atlantic. Learn about
            the origins, construction, launch and history of the Titanic. The
            experience contains interactive features so you can truly explore
            the Titanic story in an insightful light. The journey will take you
            beyond the aftermath of the sinking to the later discovery of the
            ship. This tour will also take you to the present day with a tour of
            the live undersea exploration centre.
          </p>
          <p>
            If some of your family wish to visit one attraction and others wish
            to do the other, that’s perfectly alright as we will regroup before
            we depart for the Giant’s Causeway.
          </p>

          <h5 className="green">To the Causeway...</h5>

          <Row>
            <Col xl={6} className="info-description">
              <p>
                Departing Belfast, we hit the road and into the heart of
                Northern Ireland making our way to the spectacular Irish coast.
                We stop at the remarkably unique{" "}
                <Link className="link" to="/dun">
                  Dunluce Castle
                </Link>{" "}
                located on the edge of the north Atlantic coast and used as a
                filming location for Game of Thrones – an amazing photo
                opportunity.
              </p>
              <p>
                Following a route known as the Antrim Coastal Drive we pass
                spectacular scenery, taking us through the village of Bushmills;
                best known for its whiskey distillery.
              </p>
              <p>
                From Dunluce it is just a ten minute drive to the Causeway. This
                UNESCO World Heritage-listed site was created more than 60
                million years ago after a series of volcanic eruptions. The
                Causeway is best known for its distinctive rock formations that
                span nearly 18 miles (29 kms) of coastline. During our 2 hour
                stay you can see formations such as the Wishing Chair, the
                Giant’s Boot and Organ, enjoy lunch with a choice of providers
                on site and learn about the legend of Finn MacCool.
              </p>
              <p>
                From the causeway we will continue along the antrim coastline,
                passing dunsverick castle and Whitepark Bay and Portaneevy where
                we will have a stunning view of the Rathlin Island and if the
                conditions are clear, Scotland. From this point we will be just
                14 kilometers from Scotland.
              </p>
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

          {/* <p>
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
          </Col> */}
        </Row>
      </TourRoute>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 30vh;
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
