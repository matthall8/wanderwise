import styled from "styled-components";
import placebackgroundicon from "./../../../client/images/place_icon.png"

export const StyledSelectBox = styled.select`
    appearance: none;
    width: 249px;
    background: #F2F2FB url(${placebackgroundicon}) no-repeat padding-box 5px center;
    padding: 16px 38px;
    border-radius: 5px;
    border: #D3D3D3 1px solid;
    margin: 18px auto;
    font-size:0.75rem;
    display:block;
    option {
        margin: 0 auto;
    }
`