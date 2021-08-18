import styled from "styled-components";

export const HowItWorksSection = styled.section` {
    background-color: #F64C71;
    padding: 28px 16px 12px;
    color: #FFF;
    h2 {
        width: 100%;
    }
}
`;

export const StepWrapper = styled.section` {
    @media (min-width:641px) {
        display:flex;
        width: 80%;
        margin: 0 auto;
    }
}
`;

export const Step = styled.section` {
    text-align: center;
    flex: 1 1 0;
    @media (min-width:641px) {
        padding: 0px 20px;
    }
    p {
        line-height: 1.5;
    }
    img {
        color: #fff;
        height: 64px;
    }
  }
  `;
  


