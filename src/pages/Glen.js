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
import Glen1 from "../img/glen/glen_1.webp";
import Glen2 from "../img/glen/glen_2.webp";
import Glen3 from "../img/glen/glen_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Glen = () => {
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
                <img className="location-image" src={Glen1} alt="Glen" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Glendalough</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.pexels.com/photo/green-grass-field-near-river-under-cloudy-sky-4761282/"
                    >
                      Pexels
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Glen3} alt="Glen" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Glendalough</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/manuelromaris/49041854967/in/photolist-2hHEjTz-eaQMZA-eaQFVS-eaS66j-2hHp1Q1-2icqETJ-2idUzvH-omc99X-6oM2g-NYaXLq-6ENU6R-6ETd6E-6ETcKW-6EP2SM-6ETdZJ-6EP3hV-6EP47g-eaSjMC-BQCEgy-2mznHxL-CAXMfu-2gdr4aC-bRCsMn-iyycq-aBYzAx-Y4zFQA-4yYx4D-2g2cmT4-RphXc6-SN72N1-4z3Ka3-21gNx-6EtXJp-VbkQFY-9toMhF-7VUdNd-aRzj1T-9kYxVu-wYGem7-HVihPc-d2hNoh-W8Hrgg-34Rmxp-2m5TVNv-mUE59C-Cpw1nT-2kSyqac-6rsyyB-7BG2wC-qX1zt1"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Glen2} alt="Glen" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Glendalough</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.pexels.com/photo/snow-sea-dawn-landscape-6126218/"
                    >
                      Pexels
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Glendalough</h2>
            <p>
              Glendalough, meaning Glen of Two Lakes is a glacial valley.
              Originally there was one lake but the Pollanas river, via Pollanas
              waterfall created a delta which split the lake in two. The valley
              is also home to former mining villages, between 1825 and 1925
              50,000 tonnes of lead and 25,000 ounces of silver were mined here.
              Today Glendalough is popular for it's hiking trails and rock
              climbing.
            </p>
            <p>
              St. Kevin founded a monastery at Gledalough in the 6th century,
              the original timber structures are long gone but many of the later
              stone constructions built between the 10th and 12th centuries
              remain. The buildings included a round tower, a cathedral, several
              churches and a priest's hoouse where priests were laid out before
              burial. The carving on the crosses in the graveyard are intricate
              and typical of Celtic crosses. One possible reason for this
              intricate carving is that it was more sensible to carve this
              artwork into stone rather than precious metals which could be the
              subject of plundering from vikings. The monastery at Glendalough
              was raided by vikings in 1176 and also by the British in 1398.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "It was said that once a blackbird landed on St. Kevin's hand
                  and treated it as a nest, laying an egg there. St. Kevin never
                  closed nor withdrew his hand until the bird was fully hatched.
                  Representations of St. Kevin usually include a blackbird
                  sitting on his hand."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Glen;
