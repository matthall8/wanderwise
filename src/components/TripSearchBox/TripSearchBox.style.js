import styled from "styled-components";

export const TripSearchBoxWrapper = styled.section`
    h3 {
        color: #1D1E2C;
    }
    .react-datepicker-wrapper {
        width:auto;
        display:block;
    }
    input {
        appearance: none;
        background: #FFF url("images/place_icon.png") no-repeat padding-box 5px center;
        padding: 16px 38px;
        border-radius: 5px;
        border: #727483 1px solid;
        color: #1D1E2C;
        margin: 0px auto 18px;
        font-size:0.85rem;
        font-family: 'Muli',sans-serif;
        width:auto;
        display:block;
        }
    width: 319px;
    background: #fff;
    padding: 18px 0px 0px;
    border-radius: 15px;
    border-top: #D3D3D3 1px solid;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 80%;
        display: flex;
        justify-content: space-around;
        padding: 36px 18px;
        flex-wrap: wrap;
        input {
            margin: 18px 0px;
        }
        h3 {
            width: 100%;
        }
    }
`