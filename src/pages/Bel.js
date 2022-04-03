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
import Bel1 from "../img/cwy/bel_1.webp";
import Bel2 from "../img/cwy/bel_2.webp";
import Bel3 from "../img/cwy/bel_3.webp";
import Bel4 from "../img/cwy/umbrellas.jpg";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Bel = () => {
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
                <img className="location-image" src={Bel1} alt="Belfast" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Belfast City Hall</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/gi0rtn/46587254875/in/photolist-2dYKRNk-2kpr7o9-2g7zt8N-2fuLCS6-y6zZJj-2ir39wh-5jk476-2mHyS4S-2hLzH2t-2ir39o6-2kkHxku-231buzs-9wFj91-4poAY5-WM138B-2iQq1fA-5vNGSS-2irf4jv-7JPBaR-P7mxgH-73RVKJ-RJZtCR-2ebzQqY-Dsiq1X-bZ34VS-bZ353s-2mDjrsA-BLFcgt-2aRTiZW-2h7HHWc-2i9CMkn-2ggQtsr-FM4bsS-LamEpG-2jVymYg-2d39X1A-2k1497M-APQiqC-TGdNWm-6my5vs-6my6u1-2j7jZPf-EU6pMX-ALuGpe-e5eoDB-GDnkC-9wCmEv-EU6p1B-2jL3b1B-Qrd5zG"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Bel4} alt="Belfast" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Commercial Ct</em>
                  </div>
                  <div className="photo-link">Source:Author's Own</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Bel2} alt="Belfast" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Victoria Center</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/infomatique/7319629670/in/photolist-c9NXBh-6neWde-2f57Kvr-2imYM1q-2imZVDB-umBZ4v-2imYLwp-2insXxg-2kURGt7-c9NYVU-7tDzem-c9NZXs-6HxJBq-bnZUNB-c9P1GL-c9P1Ty-c9P2Nd-c9NXYd-2mgQ9oU-c9NXqY-c9P2a1-8E5eWV-2dhkk6d-c9NWEE-qqqDj2-eaY6Z4-2jt7gSW-Rz3pmC-c9NY9f-RJW5mQ-2is1QGA-qvJy4m-8S1CRZ-kXYMbx-psP9zJ-4D6nmR-4AGnyH-c9NZaS-a7B3fx-jvKdhY-8QAjtS-6GmPjk-ja56Kf-BChiYh-a3QgTp-c4gYsN-5H6XNN-pMTWxi-7aYoBM-bsE3MF"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Bel3} alt="Belfast" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>St. Anne's Cathedral</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/djbennett999/2293995597/in/photolist-4uHjYe-9mUDu7-a5w3MH-7tr8wD-tRchen-5THosB-7H6r5B-p3JXE-aF7Sos-UFzmjB-Urgw6Y-UFzdYK-pe1rEX-uWSipv-8jWrEn-or3BEG-EHJpPy-DvRtQJ-9jwBFu-w6dz1y-5fmCMS-8tK6ni-4zCc5w-piTbch-aw6bps-2aqgHho-GkXvhk-Hi1YJV-cyz3rS-5CtX8S-aT4far-oo92Yk-7GGcw6-qEksBg-oqMfBs-piCWox-4YsjrZ-nqdLWs-QzuPA9-4DKmcv-Jf8wpZ-oBKi3j-dqEsbE-oBKhNG-CNmSL-oBXPTz-34pXK8-B27bN4-oksVQU-8NQJz"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
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
