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
import Dun1 from "../img/cwy/dun_1.webp";
import Dun2 from "../img/cwy/dun_2.webp";
import Dun3 from "../img/cwy/dun_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Dun = () => {
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
                <img className="location-image" src={Dun1} alt="Dunluce" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Dun2} alt="Dunluce" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Dun3} alt="Dunluce" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Dunluce</h2>
            <p>
              Dunluce Castle was built by the McQuillan Clan in the early 16th
              century. It was the inspiration for Castle Greyjoy in 'Game of
              Thrones' as well as Cair Paraval, the castle from CS Lewis'
              'Chronicles of Narnia'. From the castle one can see three
              countries, Northern Ireland, the Republic of Ireland and even
              Scotland. The castle also features on the inner gatefold of Led
              Zeppelins' 'Houses of the Holy'. Just beyond the castle is the
              town of Portrush, famous for it's golf course which hosted the
              Irish Open in 2019.
            </p>
            <p>
              'Dun' is a common prefix in Irish town names, it means fort, any
              town beginning with 'Dun' in Ireland has or once had a fort. Other
              common prefixes include 'Kil' meaning church and 'Bally' from the
              Irish Baile meaning town.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "One night the Lord and Lady of the castle were awaiting their
                  supper when they heard a terrible crash, when they went to
                  investigate they found that their kitchen, along with all
                  their servents, had fallen into the Irish Sea..."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Dun;
