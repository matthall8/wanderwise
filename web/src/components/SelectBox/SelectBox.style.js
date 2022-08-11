import styled from "styled-components";

export const StyledSelectBox = styled.select`
    appearance: none;
    width: 249px;
    background: #FFF url("images/place_icon.png") no-repeat padding-box 5px center;
    padding: 16px 38px;
    border-radius: 5px;
    border: #727483 1px solid;
    color: #1D1E2C;
    margin: 18px auto;
    font-size:0.85rem;
    font-family: 'Muli',sans-serif;
    display:block;

    option {
        margin: 0 auto;
    }
    @media (min-width: 768px) {
        margin: 18px 0;
        option {
            margin: 0;
        }
    }

`