import styled from "styled-components";


export const StyledHeader = styled.header`
  margin:0px 24px;
  padding: 0;
  display:flex;
  justify-content:space-between;
  align-items: center;
  height: 50px;
  @media (min-width: 768px) {
    height:auto;
  }
`;

export const LogoH1 = styled.h1`
  color: #F64C71;
  font-size: 1rem;
  font-family: 'Muli', sans-serif;
  margin: 0;
  padding: 0;
`;

export const BurgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  ${'' /* @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  } */}
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #000;
    border-radius: 10px;
    border: 0.75px solid #000;
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