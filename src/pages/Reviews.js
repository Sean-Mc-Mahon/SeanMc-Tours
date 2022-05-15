import React from "react";
import { InfoPages } from "../styles";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
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

const Reviews = () => {
  return (
    <InfoPages>
      <ScrollTop />
      <ReviewPage>
        <Container className="reviews">
          <Row>
            <Col>
              <h2>Reviews</h2>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="flexSlide"
                breakpoints={{
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide className="flexCol">
                  <Review className="review">
                    <h4 className="review-title">
                      Great tour guide
                      <i class="fa-solid fa-star">
                        <i class="fa-solid fa-star">
                          <i class="fa-solid fa-star">
                            <i class="fa-solid fa-star">
                              <i class="fa-solid fa-star"></i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </h4>
                    <p className="review-text">
                      I’m not usually a big tour kind of person but I really
                      enjoyed this tour. Our guide Sean made the trip better
                      than I thought a guide could have.
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Alex_P</strong> (May 2022)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.viator.com/en-IE/tours/Dublin/Cliffs-of-Moher-Tour-Including-Wild-Atlantic-Way-and-Galway-City-from-Dublin/d503-5300MOHER"
                        >
                          Viator
                        </a>
                      </small>
                    </div>
                  </Review>
                </SwiperSlide>
                <SwiperSlide className="flexCol">
                  <Review className="review">
                    <h4 className="review-title">
                      Must see
                      <i class="fa-solid fa-star">
                        <i class="fa-solid fa-star">
                          <i class="fa-solid fa-star">
                            <i class="fa-solid fa-star">
                              <i class="fa-solid fa-star"></i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </h4>
                    <p className="review-text">
                      Highly recommend this tour. The views are breathtaking.
                      The Cliff of Moher are a must. Galaway is a beautiful city
                      and very vibrant. Shawn (guide) and Liza (driver) did an
                      amazing job. Shawn shared a lot of information, very funny
                      and took great care of his customers.
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Isaedmarie_F</strong> (May 2022)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.viator.com/en-IE/tours/Dublin/Cliffs-of-Moher-Tour-Including-Wild-Atlantic-Way-and-Galway-City-from-Dublin/d503-5300MOHER"
                        >
                          Viator
                        </a>
                      </small>
                    </div>
                  </Review>
                </SwiperSlide>
                <SwiperSlide className="flexReview">
                  <Review className="review">
                    <h4 className="review-title">
                      <i class="fa-solid fa-star">
                        <i class="fa-solid fa-star">
                          <i class="fa-solid fa-star">
                            <i class="fa-solid fa-star">
                              <i class="fa-solid fa-star"></i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </h4>
                    <p className="review-text">
                      Our tourist guide Shaun and bus driver Lisa were great.
                      💪😊
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Kate</strong> (April 2022)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSa7KqrAwMGC0UjWoMLEwMzdItTBJTTE0S05JNbUyqDAyNDc2SktJMk80S0o0MEnyEijPzElRKMovSy1SKMkvLSoGAMfGFWM&q=wild+rover+tours&oq=wild+rover&aqs=chrome.1.69i57j46i131i175i199i433i512j69i59j0i433i512j0i512l3j69i60.5958j0j7&sourceid=chrome&ie=UTF-8#lrd=0x48670e84ed16cde5:0x21732fdb7a6ba04b,1,,,"
                        >
                          Google
                        </a>
                      </small>
                    </div>
                  </Review>
                </SwiperSlide>
              </Swiper>
              <p>
                As an independant contractor you're reviews are hugely
                important. If you enjoyed your tour I'd love to hear your
                feedback (Please remember to mention my name and the driver's
                name). You can leave a review at:
              </p>
              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.tripadvisor.ie/Attraction_Review-g186605-d2091253-Reviews-Wild_Rover_Tours-Dublin_County_Dublin.html"
                >
                  Tripadvisor
                </a>
              </p>

              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.getyourguide.com/dublin-l31/cliffs-of-moher-burren-coastal-drive-galway-bay-tour-t38154/"
                >
                  Get Your Guide (Cliffs Tour)
                </a>
              </p>
              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.getyourguide.com/dublin-l31/belfast-titanic-quarter-glens-of-antrim-t38160/"
                >
                  Get Your Guide (Causeway Tour)
                </a>
              </p>
              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.getyourguide.com/dublin-l31/kilkenny-wicklow-mountains-glendalough-from-dublin-t38157/"
                >
                  Get Your Guide (Glendalough Tour)
                </a>
              </p>

              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.google.com/search?q=wild+rover+tours+reviews&oq=wild+rover+&aqs=chrome.0.69i59j46i39i175i199j69i60l3j69i57j0i131i433i512j0i273.4172j0j7&client=ms-unknown&sourceid=chrome-mobile&ie=UTF-8"
                >
                  Google
                </a>
              </p>

              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.viator.com/en-IE/tours/Dublin/Cliffs-of-Moher-Tour-Including-Wild-Atlantic-Way-and-Galway-City-from-Dublin/d503-5300MOHER"
                >
                  Viator (Cliffs Tour)
                </a>
              </p>
              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.viator.com/tours/Dublin/Northern-Ireland-Day-Trip-from-Dublin-Belfast-Black-Taxi-Tour-and-Giants-Causeway/d503-5300BLACKCAB"
                >
                  Viator (Causeway Tour)
                </a>
              </p>
              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.viator.com/tours/Dublin/Kilkenny-City-and-Glendalough-Day-Trip-from-Dublin/d503-5300CASTLES"
                >
                  Viator (Glendalough)
                </a>
              </p>
              {/* <h5 className="green">Tips</h5>
              <p>
                Tips are welcome and split evenly with the driver, if you would
                like to leave a tip you can do so at the end of the tour or
                alternatively you can click{" "}
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://pay.strikepay.co/tags/Xc1A1ZoqF4rNYYSFJFw0?uid=Xc1A1ZoqF4rNYYSFJFw0"
                >
                  here
                </a>
                .
              </p> */}
            </Col>
          </Row>
        </Container>
      </ReviewPage>
    </InfoPages>
  );
};

const ReviewPage = styled.div`
  .swiper {
    transition: all 1s;
    padding-bottom: 1rem;
    padding-bottom: 2rem;
    width: 300px;
    @media (min-width: 450px) {
      width: 420px;
    }
    @media (min-width: 577px) {
      width: 100%;
    }
  }

  .swiper-slide {
    width: 100%;
    height: auto;
    @media (min-width: 705px) {
      height: auto;
    }
    @media (min-width: 1200px) {
      height: auto;
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--green);
    background: var(--white);
    padding: 1.3rem;
    border-radius: 50%;
    top: 40%;
    transition: all 1s;
    @media (min-width: 1200px) {
      padding: 1.3rem;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    transform: scale(0.5);
    @media (min-width: 1200px) {
      transform: scale(0.5);
    }
  }

  .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 0%;
}
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid var(--green);
  background: var(--green);
  color: var(--white);
  padding: 0.5rem;
  height: 300px;
  .review-text {
    text-align: left;
    font-style: italic;
    padding: 0rem 3rem;
  }
  .review-author {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 18px;
  }
  p {
    padding: 0;
    margin-bottom: 0.5rem;
    color: var(--white);
    font-size: 14px;
  }
  a {
    color: var(--white);
    font-size: 14px;
  }
`;

export default Reviews;
