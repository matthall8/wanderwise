import React, { useRef } from 'react';
import Head from "next/head"
import emailjs from '@emailjs/browser';
import Header from "../src/sections/Header/Header"
import TextSection from "../src/sections/TextSection/TextSection" 
import Footer from "../src/sections/Footer/Footer"
import PinkHeader from "../src/sections/PinkHeader/PinkHeader"

import TextContent from "./../src/components/TextContent/TextContent";


const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_bhy6v4p', 'template_0f40kqq', form.current, 'lnHPUKcsSwQcwPPHk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <React.Fragment>
        <Head>
            <title>Contact Us - Wander Wise</title>
        </Head>
        <Header homepage={false} />
        <PinkHeader>
          Contact Us
        </PinkHeader>
            <TextSection>
                <TextContent>
                    Please fill out the form below to get in contact with us. We aim to respond within 24 hours of receiving your message.
                </TextContent>
                <TextContent>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </TextContent>
            </TextSection>
            <Footer />
        </React.Fragment>
    );
  };

export default ContactPage
