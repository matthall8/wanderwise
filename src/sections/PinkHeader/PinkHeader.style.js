import styled from "styled-components";

export const PinkHeaderSection = styled.section`
  margin: 0 auto;
  background: #F64C71;
  padding: 0px;
  h1, h2 {
      font-size: 1.7rem;
      font-family: 'Muli', sans-serif;
      padding: 28px 16px;
      margin: 0px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      line-height: 1.3;
  }
  @media (min-width: 768px) {
      padding: 26px 0;
    h1, h2 {
      font-size: 2.1rem;
      padding: 48px 16px;
    }
    text-align: center;
}
`;
