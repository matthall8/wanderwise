import styled from "styled-components";

export const HomepageHeadingSection = styled.section`
  margin: 0 auto;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/homepage_heading_bg.png');
  background-size: cover;
  padding: 0 0 28px;
  h2 {
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
      padding: 26px 0 84px;
    h2 {
      font-size: 2.1rem;
      padding: 48px 16px;
    }
}
`;
