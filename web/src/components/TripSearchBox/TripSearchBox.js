import React, { useState } from "react";
import {TripSearchBoxWrapper, StyledSelectBox} from "./TripSearchBox.style";
import Button from "./../Button/Button"
import DatePicker from "react-datepicker";
import Heading from "./../Heading/Heading"
import "react-datepicker/dist/react-datepicker.css";

const TripSearchBox = (props) => {
    let leavingFrom = "leaving-from";
    let goingTo = "going-to";
    const selectBoxOptions = {
        "Mexico City": "mexico-city",
        "Oaxaca": "oaxaca",
        "Cancun": "cancun",
        "Tulum": "tulum",
        "Guadalajara": "guadalajara",
        "Puerto Escondido": "puertoescondido"
    }

    if(props.route !== undefined) {
        const routeDetails = props.route.split(" to ");
        leavingFrom = selectBoxOptions[routeDetails[0]];
        goingTo = selectBoxOptions[routeDetails[1]];
    }

    const [startDate, setStartDate] = useState(new Date());
    const [leavingFromState, setLeavingFromState] = useState(leavingFrom);
    const [goingToState, setGoingToState] = useState(goingTo);

    // Handle Leaving From click
    const handleLeavingFromClick = () => {
        window.dataLayer.push({
            event: 'leaving_from_click',
            dlv_leaving_from: leavingFromState
        });
    };

    // Handle Going To click
    const handleGoingToClick = () => {
        window.dataLayer.push({
            event: 'going_to_click',
            dlv_going_to: goingToState
        });
    };

    const comingSoon = () => {
        if(goingToState == leavingFromState) {
            alert("Please choose different going to and leaving from locations");
        } else {
            window.dataLayer.push({
                event: 'search_initiated',
                dlv_leaving_from: leavingFromState,
                dlv_going_to: goingToState,
                dlv_date: startDate.toISOString()
            });
            alert("Thank you for your interest. We are currently working on this feature. Please check back and try again later.");
        }
    }

    return (
        <TripSearchBoxWrapper>
            <Heading type="h3">Discover the best value journey:</Heading>
            <StyledSelectBox 
                value={leavingFromState}
                onClick={handleLeavingFromClick}
                onChange={(e) => {
                    const selectedLeavingFrom=e.target.value;
                    setLeavingFromState(selectedLeavingFrom);
                }}
            >
                <option value="leaving-from" disabled hidden>Leaving from...</option>
                {goingToState != 'mexico-city' && <option value="mexico-city">Mexico City</option>}
                {goingToState != 'oaxaca' && <option value="oaxaca">Oaxaca</option>}
                {goingToState != 'cancun' && <option value="cancun">Cancun</option>}
                {goingToState != 'tulum' && <option value="tulum">Tulum</option>}
                {goingToState != 'guadalajara' && <option value="guadalajara">Guadalajara</option>}
                {goingToState != 'puertoescondido' && <option value="puertoescondido">Puerto Escondido</option>}
            </StyledSelectBox>
            <StyledSelectBox 
                value={goingToState}
                onClick={handleGoingToClick}
                onChange={(e) => {
                    const selectedGoingTo=e.target.value;
                    setGoingToState(selectedGoingTo);
                }}
            >
                <option value="going-to" disabled hidden>Going to...</option>
                {leavingFromState != 'mexico-city' && <option value="mexico-city">Mexico City</option>}
                {leavingFromState != 'oaxaca' && <option value="oaxaca">Oaxaca</option>}
                {leavingFromState != 'cancun' && <option value="cancun">Cancun</option>}
                {leavingFromState != 'tulum' && <option value="tulum">Tulum</option>}
                {leavingFromState != 'guadalajara' && <option value="guadalajara">Guadalajara</option>}
                {leavingFromState != 'puertoescondido' && <option value="puertoescondido">Puerto Escondido</option>}
            </StyledSelectBox>
            <DatePicker 
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
            />
            <Button value="Go" onClick={comingSoon}></Button>
        </TripSearchBoxWrapper>
    );
};

export default TripSearchBox;