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
                      Sean is really interesting to listen to (and also plays
                      awesome music)! It was the perfect day trip, I highly
                      recommend doing this while in Ireland.
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Liv Campbell</strong> (Dec 2022)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.tripadvisor.ie/Attraction_Review-g186605-d2091253-Reviews-Wild_Rover_Tours-Dublin_County_Dublin.html"
                        >
                          Tripadvisor
                        </a>
                      </small>
                    </div>
                  </Review>
                </SwiperSlide>
                <SwiperSlide className="flexCol">
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
                      The guide sean and driver Joe went above and beyond to
                      make sure everyone enjoyed the day would highly recommend
                      it we are already planning our next trip to the cliff's of
                      moher.
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Mandie kinsella</strong> (Dec 2022)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.google.com/search?q=wild+rover+tours+reviews&oq=wild+rover+&aqs=chrome.0.69i59j46i39i175i199j69i60l3j69i57j0i131i433i512j0i273.4172j0j7&client=ms-unknown&sourceid=chrome-mobile&ie=UTF-8#lrd=0x48670e84ed16cde5:0x21732fdb7a6ba04b,1,,,"
                        >
                          Google
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
                      The Cliff's were magnificent. But Sean and Warren made the
                      trip to be a learning and enjoyable experience.
                      Outstanding tour, thanks to them.
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Thomas_N</strong> (Dec 2022)
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
              {/* get your quide section not needed for now */}
              {/* <p>
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
              </p> */}
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
                  href="https://www.viator.com/en-IE/tours/Dublin/Titanic-Visitor-Experience-and-Giants-Causeway-Day-Trip-from-Dublin/d503-5300TITANIC"
                >
                  Viator (Causeway Tour/Titanic)
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
