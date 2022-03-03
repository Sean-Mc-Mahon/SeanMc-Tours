import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

function NavMenu() {
  const [openBurger, setOpenBurger] = useState(false);

  const BurgerClick = () => {
    openBurger ? setOpenBurger(false) : setOpenBurger(true);
    console.log(openBurger);
  };
  return (
    <NavList className={openBurger ? "burger-active" : "top-nav"}>
      <ul>
        <li onClick={BurgerClick}>
          <Link className="link" to="/">
            Tours
          </Link>
        </li>
        <li onClick={BurgerClick}>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li onClick={BurgerClick}>
          <Link className="link" to="/music">
            Music
          </Link>
        </li>
        <li onClick={BurgerClick}>
          <Link className="link" to="/food">
            Food
          </Link>
        </li>
        <li onClick={BurgerClick}>
          <Link className="link" to="/reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <div
        id="burger"
        onClick={BurgerClick}
        className={openBurger ? "burger-active" : "top-nav"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </NavList>
  );
}

const NavList = styled.div`

#burger{
      cursor: pointer;
      margin-right: 1rem;
      div {
      width: 25px;
      height: 3px;
      border-radius: 50px;
      background-color: var(--light-grey);
      margin: 5px;
      transition: all 0.3s ease;
      }
      
    @media (min-width: 768px) {
      display: none;
    }
  }

  ul {
    position: absolute;
    right: 0px;
    height: 90vh;
    top: 10vh;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
    transition: transform 0.5s ease-in;
    @media (min-width: 768px) {
      position: relative;
      top: auto;
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 0 2rem;
      margin: 0;
    }
  a {
    color: var(--light-grey);
    text-decoration: none;
    font-weight: bold;
    :hover {
      color: var(--green);
    }
  }
`;

export default NavMenu;
