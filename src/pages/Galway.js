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
import Galway1 from "../img/cliffs/gal_1.webp";
import Galway2 from "../img/cliffs/gal_2.webp";
import Galway3 from "../img/cliffs/gal_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Galway = () => {
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
                <img className="location-image" src={Galway1} alt="Galway" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Shop Street</em>
                  </div>
                  <div className="photo-link">
                    Source: Professor Chaosheng Zhang
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Galway2} alt="Galway" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Galway Docks</em>
                  </div>
                  <div className="photo-link">
                    Source: Professor Chaosheng Zhang
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Galway3} alt="Galway" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Galway Docks</em>
                  </div>
                  <div className="photo-link">
                    Source: Professor Chaosheng Zhang
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Galway</h2>
            <p>
              With a population of 80 thousand Galway is the third largest city
              in Ireland, about 10% of the population speak Irish which is much
              higher than the national average. It is an extremely cultural city
              and was even named the European capital of culture for 2020. It is
              home to many festivals and it's streets are usually full of
              musicians.
            </p>
            <p>
              Galway city is nicknamed 'The City of Tribes' after the 14
              merchant families who led the ciy during the Hiberno-Norman
              period, 12 of the families were Norman (French) and 2 were
              Hibernian (Irish). During this period native Irish people were not
              allowed to enter the city it was written into the town charter
              that{" "}
              <i>
                {" "}
                'neither O nor Mac shall strutte nor stride through the streets
                of Galway without permission.'
              </i>
            </p>
            <p>
              The former fishing village of Cladagh is located just outside of
              the city and is the home of the famous 'Cladagh Ring', the design
              of which is two hands holding a heart with a crown above. The
              hands symbolise friendship, the heart love and the crown loyalty.
            </p>
            <p className="quote">
              <i>
                <strong>
                  " The Cladagh design is often attributed to Richard Joyce, an
                  18th century goldsmith who was captured by Algerian pirates
                  and sold as a slave. After 14 years Joyce was released and
                  gave the ring which he designed while in captivity to his
                  sweetheart. "
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Galway;
