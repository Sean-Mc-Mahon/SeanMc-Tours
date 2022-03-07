import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//images
import Dark1 from "../img/cwy/dark_1.webp";
import Dark4 from "../img/cwy/dark_4.webp";
import Dark3 from "../img/cwy/dark_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Dark = () => {
  return (
    <motion.div>
      <ScrollTop />
      <Container fluid>
        <Row className="image-description">
          <Col xl={6} className="image">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img className="location-image" src={Dark1} alt="Dark Hedges" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>The Dark Hedges</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.belfasttelegraph.co.uk/life/features/game-of-thrones-dark-hedges-secrets-are-revealed-31380205.html"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Dark4} alt="Dark Hedges" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Dark Hedges in GoT</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.belfasttelegraph.co.uk/life/features/game-of-thrones-dark-hedges-secrets-are-revealed-31380205.html"
                    >
                      Belfast Telegraph
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Dark3} alt="Dark Hedges" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Dark Hedges</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/28258790@N00/33382139596/in/photolist-SRSc5Y-2hwrzgp-FhkdrS-DWCtND-2dSWry9-SqLwBx-HoM9Q1-EeWAKF-2iBXXMN-26xa1N7-X2HKLA-2jL6RaC-SUsmpG-BqAS8K-MuZ5wF-2jzSAqj-2iyetps-Ha6KsS-Ft9wCs-2jgzUo5-PBvBsX-MW5aNo-2mw9C4N-Z3rdKs-Y3AawZ-23e67tN-SqkhtY-AVtEfJ-2i4eHCc-2ht4X2F-2mJcB9V-2mQjQF4-2k7oZPx-2jwuW6J-2gPuyCz-wpefgx-2jZHb78-WRAeCR-29ZpxRu-GEPztC-2hrbCkW-GM2M4Z-22c1qwi-XkxUPh-2jUouXc-2mqYFEu-28P1Wgh-x1WsL3-2jNRNdn-GJoogT"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Dark Hedges</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              obcaecati numquam velit a consequatur asperiores, neque non maxime
              vitae odit necessitatibus repellat libero? Iure, enim sunt tempore
              atque impedit quaerat at iste esse molestiae perspiciatis odio
              molestias voluptatibus quod! Dicta officiis commodi quia quas
              nesciunt veritatis accusamus, quam laborum voluptates.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              aspernatur amet distinctio magnam quae maxime, non optio
              repellendus fugit delectus provident aperiam animi pariatur
              commodi rem eum assumenda a voluptate blanditiis! Sed illo
              voluptatum aut illum aliquam nobis quidem accusantium!
            </p>
            <p className="quote">
              <i>
                <strong>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque error accusamus quia quae ab nobis a modi at
                  exercitationem nulla. "
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Dark;
