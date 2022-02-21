import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//images
import Bel1 from "../img/cwy/bel_1.webp";
import Bel2 from "../img/cwy/bel_2.webp";
import Bel3 from "../img/cwy/bel_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Bel = () => {
  return (
    <motion.div>
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
                <img className="location-image" src={Bel1} alt="Belfast" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Bel2} alt="Belfast" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Bel3} alt="Belfast" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Belfast</h2>
            <p>
              Belfast is the only city in Ireland to properly experience the
              industrial revolution. The main industries at the time were linen
              and shipbuilding. Belfast benefitted greatly from the outbreak of
              the American Civil War which disrupted the flow of cotton from
              America to Europe.
            </p>
            <p>
              The Harland and Wolff shipyard was where the Titanic was built.
              They were by far the largest employers in Belfast at the time and
              only closed it's doors in 2019 after being in operation for over
              150 years.
            </p>
            <p className="quote">
              <i>
                <strong>
                  " Cave Hill, just north of Belfast, resembles a giant lying on
                  it's back, facing the sky and is said to be the inspiration
                  for Jonathon Swift's Gulliver's Travels, where Gulliver wakes
                  up while being tied down by the lillyputians."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Bel;
