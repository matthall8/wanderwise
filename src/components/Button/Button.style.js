import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    background: #F64C71;
    color: #fff;
    font-weight:bold;
    padding: 18px 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 0;
    margin: 18px auto 0;
    font-size:0.85rem;
    @media (min-width: 768px) {
        width: 20%;
        border-radius: 5px;
        padding: 16px 0px;
        height: 50px;
        margin: 18px auto;
    }
`