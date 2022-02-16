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
import Cliffs1 from "../img/cliffs/cliffs_1.webp";
import Cliffs2 from "../img/cliffs/cliffs_2.webp";
import Cliffs3 from "../img/cliffs/cliffs_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Cliffs = () => {
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
                <img
                  className="location-image"
                  src={Cliffs1}
                  alt="Cliffs of Moher"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Cliffs2}
                  alt="Cliffs of Moher"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Cliffs3}
                  alt="Cliffs of Moher"
                />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Cliffs of Moher</h2>
            <p>
              The cliffs were formed over 300 million years ago during the
              Carboniferous period. They began as a river delta and over
              millions of years the mud and sand deposits formed the ginormous
              cliffs of Moher. They are 214 meters tall at their highest point
              and are the most visited attraction in Ireland outside of Dublin.
            </p>
            <p>
              The cliffs have featured in moves such as 'Harry Potter and the
              Half Blood Prince' in the scene where Harry and Dumbledore were
              searching for Horcruxes of Voldemort they came to a cave at the
              base of the cliffs. 'Fr. Ted', one of Ireland's most beloved TV
              shows filmed a few episodes at the cliffs also.
            </p>
            <p>
              Many rare birds make their home at the cliffs including the puffin
              and the peregrin falcon, one of the fastest creatures on Earth
              with a diving speed of over 320km/hr. In recent years the cliffs
              have become a mecca for surfers from all over the world, when
              conditons are just right a wave named Aileen may form beneath
              Foal's Leap, one of the peaks of the cliffs. The wave is up to 12
              meters tall and can only be ridden by an expert surfer.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "Foal's leap recieved it's name from seven Celtic gods who
                  transformed themselves into foals and leapt off of the cliffs
                  after waking from a long slumber to find that Christianity had
                  taken a hold of Ireland"
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Cliffs;
