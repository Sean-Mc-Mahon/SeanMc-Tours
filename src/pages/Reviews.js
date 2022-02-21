import React from "react";
import { InfoPages } from "../styles";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <InfoPages>
      <Container>
        <Row>
          <Col>
            <h2>Reviews</h2>
            <Review className="review">
              <h4 className="review-title">Beautiful and factfull</h4>
              <p className="review-text">
                It was a great ride, amazing sites, plenty of interesting facts,
                great atmosphere for everyone, definitely recommend going on a
                tour with the guide Sean and the driver Fergus.
              </p>
              <div className="name-date">
                <h5 className="review-name">Moloce A</h5>
                <h5 className="review-date">Feb 22</h5>
              </div>
              <p className="review-site">
                Reviewed on:
                <a href="https://www.tripadvisor.ie/Attraction_Review-g186605-d6728818-Reviews-Finn_McCools_Tours-Dublin_County_Dublin.html#REVIEWS">
                  Tripadvisor
                </a>
              </p>
            </Review>
            <p>
              As an independant contractor you're reviews are hugely important.
              If you enjoyed your tour I'd love to hear your feedback. You can
              leave a review at:
            </p>
            <p>
              <a href="https://www.tripadvisor.ie/Attraction_Review-g186605-d6728818-Reviews-Finn_McCools_Tours-Dublin_County_Dublin.html#REVIEWS">
                Tripadvisor
              </a>
            </p>
            <p>
              <a href="https://www.getyourguide.com/dublin-l31/giant-s-causeway-full-day-tour-from-dublin-t67953/">
                Get Your Guide
              </a>
            </p>
            <p>
              <a href="https://www.google.com/search?q=finnmccools+tours+reviews&sxsrf=APq-WBvFdgqkTomb6fWUO7PbjIben8WX7g%3A1645466140111&ei=HNITYuCZBtK4gQbBlJPABg&ved=0ahUKEwjgl5WGr5H2AhVSXMAKHUHKBGgQ4dUDCA4&uact=5&oq=finnmccools+tours+reviews&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEOgcIABBHELADOgoILhDHARCvARANOgYIABAWEB46AggmOgcIIRAKEKABSgQIQRgASgQIRhgAUMIFWKgRYMwSaAFwAXgAgAFViAGeBJIBATiYAQCgAQHIAQjAAQE&sclient=gws-wiz#lrd=0x48670e9b3484f153:0x43098a869598425b,1,,,">
                Google
              </a>
            </p>
            <p>
              <a href="https://www.viator.com/en-IE/tours/Dublin/Cliffs-of-Moher-The-Burren-and-Galway-Day-Trip-from-Dublin/d503-7572P3">
                Viator
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </InfoPages>
  );
};

const Review = styled.div`
  border-radius: 10px;
  border: 2px solid var(--green);
  padding: 1rem;
  background: var(--green);
  color: var(--white);
  .name-date {
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
