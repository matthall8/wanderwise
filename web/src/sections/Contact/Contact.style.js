import styled from "styled-components";

export const ContactInput = styled.input`
  font-family: 'Muli',sans-serif;
  display: block;
  margin-top: 24px;
  font-size: 1rem;
  color: #1D1E2C;
  background: #fff;
  padding: 16px 24px;
  border: #727483 1px solid;
  border-radius:5px;
  width:80%;
  text-align: center;
  @media only screen and (min-width: 600px) {
    width: 100%;
    padding: 24px 0px;
    }
`;

export const ContactForm = styled.form`
    label {
        display:none;
    }
`;

export const ErrorMessage = styled.section`
    padding: 24px;
    display: block;
    font-weight: bold;
    border: #DD614A 2px solid;
    background: #fff;
    font-family: Open Sans;
    font-size: 1.0rem;
    line-height: 1.6;
    margin: 32px auto 0px auto;
    width: 230px;
    text-align: center;
    @media only screen and (min-width: 600px) {
       
    }
`;

export const ThankYouMessage = styled.section`
    color: #1D1E2C;
    margin: 24px 0px;
    padding: 12px;
    font-size: 1rem;
    font-family: 'Muli', sans-serif;
    line-height: 1.75;
    font-weight: normal;
    text-align:left;
    display: block;
    border: #727483 1px solid;
    border-radius:5px;
    padding: 16px 24px;
    width: 80%;
    @media (min-width:641px) {
        margin: 24px auto 0px;
        text-align:center;
        padding: 28px 24px;
    }
`;

export const Textarea = styled.textarea`
    font-family: 'Muli',sans-serif;
    margin-top: 24px;
    font-size: 1rem;
    text-align: center;
    color: #1D1E2C;
    background: #fff;
    padding: 24px 24px 64px;
    border: #727483 1px solid;
    border-radius:5px;
    margin: 24px auto 0px auto;
    text-align: center;
    width: 80%;
  @media only screen and (min-width: 600px) {
      width: 100%;
      height: 100%;
      margin: 24px auto 0px;
      padding: 24px 0px 64px;
    }
`;

export const Submit = styled.button`
    background: #F64C71;
    color: #fff;
    font-weight:bold;
    border: 0;
    display:block;
    margin: 18px 0 0;
    font-size:1rem;
    border-radius: 5px;
    padding: 16px 24px;
    height: 100%;
    width:80%;
    @media only screen and (min-width: 600px) {
        padding: 18px 24px;
        width: 100%;
        margin: 18px auto 0;
      }
`;