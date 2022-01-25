import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 200;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  .burgerText {
    color: #3e4095;
    text-decoration: none !important;
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;
  }
  .burgerText:hover {
    transform: scale(1.03);
  }
  .txt {
    margin-top: 20px;
  }
  @media (min-width: 100px) {
    z-index: 200;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #3e4095;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      
    </Ul>
  );
};

export default RightNav;
