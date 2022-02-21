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
                <div className="photo-description">
                  <div className="photo-title">
                    <em>The Burren</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/87129989@N00/29593909647/in/photolist-M67wiv-ycNumJ-2cUqHks-AzRYyK-GKWSvQ-7aWRvn-Xrrq1M-7wTF6s-66L2vz-7Ub8Zn-z7Kc-4pFqVR-ffByRb-5qNTzp-pNRKy-9yjuf1-8SJXn-2mnDNBH-5qNSUt-ffnkoe-5qTbFu-2wme1-5qNNmK-8dnL9v-5qTb3S-g7oLUW-amCN2-4Gb3LC-6ZS3qc-oEMLqw-5qTcj1-oEMQnE-5qNUd8-oWViNq-8eUmf8-4daG87-oEB1aE-67ZNUA-HFq1k-ookbS3-oGzi2g-ookwTV-oEMNf3-oEPvYK-oCMFEA-9Qc9sY-aWHaaV-oGzhri-9rAtei-oojW1F"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Burren2} alt="Burren" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>The Burren</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/larrywkoester/15453685540/in/photolist-pxAbj9-oGzoMK-8eccRn-4wrf4G-oojXta-AdGpA-83dAeN-9u8Rq7-8ecdHZ-oojYhK-8F5roR-8szXK7-oEB3eE-68Qmgq-oojKij-32Kjxc-ooktWx-ookuGR-8eXCKb-ook8QG-68Qjww-7KMxTS-oojKe1-5Kkebm-4YWfAM-Tyerb9-oExTut-6eViAQ-ooktDZ-68QhCs-5hxJJq-68QiH7-7hYwWG-5ThgFc-oExUvB-67rFVy-ooktg4-PRBin9-85unYk-oojJZU-68L5te-oEPvbn-4d6Gwt-8eXCDQ-68L5EF-68QkDb-oExYoM-AdGrf-AdGtP-32JSHn"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
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
