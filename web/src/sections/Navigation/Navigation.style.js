import styled from "styled-components";

export const BurgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#1D1E2C' : '#1D1E2C'};
    border-radius: 10px;
    border: 0.75px solid #1E282A;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 12px;
  }
  @media (max-width: 768px) {
    font-family: 'Muli', sans-serif;
    margin: 0;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 100%;
    padding: 0rem 0 0 0;
    color: #1E282A;
    a {
      color: #1E282A;
    }
    transition: transform 0.3s ease-in-out;
    li {
      font-weight: bold;
      border-bottom: #F64C71 1px solid;
    }
  }
`;  
