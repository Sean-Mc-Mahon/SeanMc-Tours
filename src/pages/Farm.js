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
import Farm1 from "../img/glen/farm_1.webp";
import Sheep from "../img/glen/sheep.jpg";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Farm = () => {
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
                <img className="location-image" src={Farm1} alt="Farm" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Irish Working Sheepdogs</em>
                  </div>
                  <div className="photo-link">Source: Author's Own</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Sheep} alt="Sheep" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Irish Working Sheepdogs</em>
                  </div>
                  <div className="photo-link">Source: Author's Own</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Sheepdog Demonstration</h2>
            <p>
              Once we arrive at the farm I will hand over the tourguiding duties
              to the talented Michael who will demonstrate how he manages to
              herd his sheep using his incredibly trained border collies. As
              well as seeing the dogs in action Michael will explain all about
              how the sheep are raised and taken care of and how the sheep
              industry in general works.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Farm;
