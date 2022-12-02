import React, { useState } from "react";
import {TripSearchBoxWrapper} from "./TripSearchBox.style";
import SelectBox from "./../SelectBox/SelectBox";
import Button from "./../Button/Button"
import DatePicker from "react-datepicker";
import Heading from "./../Heading/Heading"

import "react-datepicker/dist/react-datepicker.css";


const TripSearchBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  const comingSoon = () => {
    console.log("Hello!");
    alert("Thank you for your interest. We are currently working on this feature. Please check back and try again later.");
  }
  return (
    <TripSearchBoxWrapper>
        <Heading type="h3">Search for the best value route:</Heading>
        <SelectBox initialValue="Leaving from...">
          <option value="mexico-city">Mexico City</option> 
          <option value="oaxaca">Oaxaca</option>
          <option value="cancun">Cancun</option>
          <option value="tulum">Tulum</option> 
          <option value="guadalajara">Guadalajara</option>
          <option value="puertoescondido">Puerto Escondido</option>
        </SelectBox>
        <SelectBox initialValue="Going to...">
          <option value="mexico-city">Mexico City</option> 
          <option value="oaxaca">Oaxaca</option>
          <option value="cancun">Cancun</option>
          <option value="tulum">Tulum</option> 
          <option value="guadalajara">Guadalajara</option>
          <option value="puertoescondido">Puerto Escondido</option>
        </SelectBox>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <Button value="Go" onClick={comingSoon}></Button>
    </TripSearchBoxWrapper>
  );
};

export default TripSearchBox;