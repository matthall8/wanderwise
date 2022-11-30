import styled from "styled-components";

export const StyledPopularRoutesSection = styled.section` {
  padding: 28px 16px 12px;
  margin: 0 auto;
}
`;

export const PopularRouteLinks = styled.section` {
  padding: 12px 16px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    width: 80%;
  }
  a {
    color: #1D1E2C;
  }
  a:hover {
    color: #F64C71;
  }
}
`;

