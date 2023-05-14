import React, { useState } from "react";
import {TripSearchBoxWrapper, StyledSelectBox} from "./TripSearchBox.style";
// import SelectBox from "./../SelectBox/SelectBox";
import Button from "./../Button/Button"
import DatePicker from "react-datepicker";
import Heading from "./../Heading/Heading"

import "react-datepicker/dist/react-datepicker.css";


const TripSearchBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  const comingSoon = () => {
    if(goingToState == leavingFromState) {
      alert("Please choose different going to and leaving from locations");
    }
    else {
      alert("Thank you for your interest. We are currently working on this feature. Please check back and try again later.");
    }
  }
  const [leavingFromState, setLeavingFromState] = useState("Leaving from..");
  const [goingToState, setGoingToState] = useState("Going to...");
  return (
    <TripSearchBoxWrapper >
      <Heading type="h3">Search for the best value route:</Heading>
      <StyledSelectBox onChange={(e) => {
          const selectedLeavingFrom=e.target.value;
          setLeavingFromState(selectedLeavingFrom);
        }}>
        <option disabled hidden selected="selected">Leaving from...</option>
        {goingToState != 'mexico-city' &&<option value="mexico-city">Mexico City</option>} 
        {goingToState != 'oaxaca' &&<option value="oaxaca">Oaxaca</option>}
        {goingToState != 'cancun' &&<option value="cancun">Cancun</option>}
        {goingToState != 'tulum' &&<option value="tulum">Tulum</option> }
        {goingToState != 'guadalajara' &&<option value="guadalajara">Guadalajara</option>}
        {goingToState != 'puertoescondido' && <option value="puertoescondido">Puerto Escondido</option>}
      </StyledSelectBox>
      <StyledSelectBox onChange={(e) => {
          const selectedGoingTo=e.target.value;
          setGoingToState(selectedGoingTo);
        }}>
        <option disabled hidden selected="selected">Going to...</option>
        {leavingFromState != 'mexico-city' &&<option value="mexico-city">Mexico City</option>} 
        {leavingFromState != 'oaxaca' &&<option value="oaxaca">Oaxaca</option>}
        {leavingFromState != 'cancun' &&<option value="cancun">Cancun</option>}
        {leavingFromState != 'tulum' &&<option value="tulum">Tulum</option> }
        {leavingFromState != 'guadalajara' &&<option value="guadalajara">Guadalajara</option>}
        {leavingFromState != 'puertoescondido' && <option value="puertoescondido">Puerto Escondido</option>}
      </StyledSelectBox>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <Button value="Go" onClick={comingSoon}></Button>
    </TripSearchBoxWrapper>
  );
};

export default TripSearchBox;