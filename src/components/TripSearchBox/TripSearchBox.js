import React, { useState } from "react";
import {TripSearchBoxWrapper} from "./TripSearchBox.style";
import SelectBox from "./../SelectBox/SelectBox";
import Button from "./../Button/Button"
import DatePicker from "react-datepicker";
import Heading from "./../Heading/Heading"

import "react-datepicker/dist/react-datepicker.css";


const TripSearchBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <TripSearchBoxWrapper>
        <Heading type="h3">Search for the best value route:</Heading>
        <SelectBox initialValue="Leaving from..." option="Oaxaca City" />
        <SelectBox initialValue="Going to..." option="Mexico City" />
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <Button value="Go"></Button>
    </TripSearchBoxWrapper>
  );
};

export default TripSearchBox;