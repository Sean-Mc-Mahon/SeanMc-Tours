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
                      ...Everything was made special thanks to Sean's
                      explanations full of curiosities and Irish songs in the
                      background! A real immersion in the culture of this
                      country!! Sean was also really helpful in giving any
                      advice and Marco was an impeccable driver, even in the
                      most difficult corners!...
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Giulia</strong> (March 22)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.getyourguide.com/dublin-l31/cliffs-of-moher-full-day-tour-from-dublin-t91047/"
                        >
                          Get Your Guide
                        </a>
                      </small>
                    </div>
                  </Review>
                </SwiperSlide>
                <SwiperSlide className="flexReview">
                  <Review className="review">
                    <h4 className="review-title">
                      Beautiful and factfull{" "}
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
                      It was a great ride, amazing sites, plenty of interesting
                      facts, great atmosphere for everyone, definitely recommend
                      going on a tour with the guide Sean and the driver Fergus.
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Moloce A</strong> (Feb 22)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.tripadvisor.ie/Attraction_Review-g186605-d6728818-Reviews-Finn_McCools_Tours-Dublin_County_Dublin.html#REVIEWS"
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
                      ...Thank you so much Sean and Fergus for making this trip
                      so smooth and enjoyable. Will definitely be coming again
                      the next time we come to Ireland!
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Grace</strong> (Feb 22)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.getyourguide.com/dublin-l31/giant-s-causeway-full-day-tour-from-dublin-t67953/"
                        >
                          Get Your Guide
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
                      The experience with Sean (guide) and Vic (driver) was
                      absolutely an amazing one. A lot of interesting
                      information about Dublin, history of Ireland, deep
                      knowledge of Irish music and Irish food. I totally
                      recommend it! It is a unique possibility to discover new
                      thing while staying in Dublin for some days! The place
                      visited were really interesting. Good job! :)
                    </p>
                    <div className="review-author">
                      <div className="review-name">
                        <strong>Isabella Ronci</strong> (Feb 22)
                      </div>
                      <small className="review-site">
                        {" "}
                        <a
                          rel="noopener"
                          target={"blank"}
                          href="https://www.google.com/search?q=finnmccools+tours+reviews&sxsrf=APq-WBvFdgqkTomb6fWUO7PbjIben8WX7g%3A1645466140111&ei=HNITYuCZBtK4gQbBlJPABg&ved=0ahUKEwjgl5WGr5H2AhVSXMAKHUHKBGgQ4dUDCA4&uact=5&oq=finnmccools+tours+reviews&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEOgcIABBHELADOgoILhDHARCvARANOgYIABAWEB46AggmOgcIIRAKEKABSgQIQRgASgQIRhgAUMIFWKgRYMwSaAFwAXgAgAFViAGeBJIBATiYAQCgAQHIAQjAAQE&sclient=gws-wiz#lrd=0x48670e9b3484f153:0x43098a869598425b,1,,,"
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
                  href="https://www.tripadvisor.ie/Attraction_Review-g186605-d6728818-Reviews-Finn_McCools_Tours-Dublin_County_Dublin.html#REVIEWS"
                >
                  Tripadvisor
                </a>
              </p>

              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.getyourguide.com/dublin-l31/giant-s-causeway-full-day-tour-from-dublin-t67953/"
                >
                  Get Your Guide (Causeway Tour)
                </a>
              </p>

              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.getyourguide.com/dublin-l31/cliffs-of-moher-full-day-tour-from-dublin-t91047/"
                >
                  Get Your Guide (Cliffs Tour)
                </a>
              </p>
              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.getyourguide.com/dublin-l31/glendalough-wicklow-kilkenny-sheep-dog-trails-t131067/"
                >
                  Get Your Guide (Glendalough Tour)
                </a>
              </p>

              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.google.com/search?q=finnmccools+tours+reviews&sxsrf=APq-WBvFdgqkTomb6fWUO7PbjIben8WX7g%3A1645466140111&ei=HNITYuCZBtK4gQbBlJPABg&ved=0ahUKEwjgl5WGr5H2AhVSXMAKHUHKBGgQ4dUDCA4&uact=5&oq=finnmccools+tours+reviews&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEOgcIABBHELADOgoILhDHARCvARANOgYIABAWEB46AggmOgcIIRAKEKABSgQIQRgASgQIRhgAUMIFWKgRYMwSaAFwAXgAgAFViAGeBJIBATiYAQCgAQHIAQjAAQE&sclient=gws-wiz#lrd=0x48670e9b3484f153:0x43098a869598425b,1,,,"
                >
                  Google
                </a>
              </p>

              <hr />
              <p>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.viator.com/en-IE/tours/Dublin/Cliffs-of-Moher-The-Burren-and-Galway-Day-Trip-from-Dublin/d503-7572P3"
                >
                  Viator
                </a>
              </p>
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
