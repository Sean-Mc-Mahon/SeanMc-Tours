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
import Burren1 from "../img/cliffs/burren_1.webp";
import Burren2 from "../img/cliffs/burren_2.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Burren = () => {
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
                <img className="location-image" src={Burren1} alt="Burren" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Burren2} alt="Burren" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">The Burren</h2>
            <p>
              The Burren was formed 350 million years ago during the
              carbonaniferous period when Ireland was part of the super
              continent pangea. At this time the burren was submerged in
              tropical water and over millions of years sea creatures would have
              died, fallen to the bottom of the sea and formed the limestone of
              the burren. Limestone is very porous and tectonic shifts,
              continental drifts and various ice ages caused the rock to crack
              and fold and form crevices. There is a dense network of caves and
              streams under the surface of the Burren.
            </p>
            <p>
              The Burren is a Unesco geopark with amazing flora and fauna, it is
              the only place in the world where glacial as well as meditarean
              and alpine plants grow side by side.Tolkien's Gollum from "Lord of
              the Rings" was inspired by a cave in the burren named
              Pollnagollum. The name Burren comes from the Irish 'An mBuireann'
              meaning rocky place.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "It is rumoured that the legendary warrior Fionn MacCumhaill
                  lies in hibernation in one of the many caves of the burren
                  waiting for the time of Ireland's greatest need to return."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Burren;
