import React, {Component, createRef} from "react";
import Head from "next/head"
import emailjs from '@emailjs/browser';
import Header from "../src/sections/Header/Header"
import TextSection from "../src/sections/TextSection/TextSection" 
import Footer from "../src/sections/Footer/Footer"
import PinkHeader from "../src/sections/PinkHeader/PinkHeader"

import TextContent from "./../src/components/TextContent/TextContent";

import {ContactForm, ContactInput,Textarea, Submit} from "./../src/sections/Contact/Contact.style";

class ContactPage extends Component {
    constructor(props) {
      super(props);
      this.MessageRef = createRef(); 
      this.FormRef = createRef();
    }
    state = {
        name: '',
        email: '',
        message: '',
        thankYouMessage: false,
        errorMessage: false,
    }
    handleSubmit(e) {
      e.persist()    
      e.preventDefault() 
      emailjs.sendForm('service_bhy6v4p', 'template_0f40kqq', e.target, 'lnHPUKcsSwQcwPPHk')
         .then(() => {
          this.resetForm()
      }, () => {
          this.showError()
      });   
     }
     showError() {
      const MessageArea = this.MessageRef.current;
      this.setState({
        errorMessage: true,
      })
        MessageArea.scrollIntoView();
     }
     resetForm() {
        const MessageArea = this.MessageRef.current;
        const FormArea = this.FormRef.current;
        this.setState({
          name: '',
          email: '',
          message: '',
          thankYouMessage: true,
        })
          FormArea.reset()
          MessageArea.scrollIntoView();
      }
      handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
      render() {
      return(
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
                    <ContactForm onSubmit={this.handleSubmit.bind(this)} ref={this.FormRef}>
                        <label htmlFor="name">Name</label>
                        <ContactInput
                            component="input"
                            placeholder="Your Name"
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name')}
                        />
                        <label htmlFor="email">Email</label>
                        <ContactInput
                            component="input"
                            placeholder="Your Email"
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}
                        />
                        <label htmlFor="message">Message</label>
                        <Textarea 
                            placeholder="Your Message"
                            value={this.state.message}
                            name="message"
                            onChange={this.handleChange.bind(this, 'message')}
                            required>
                        </Textarea>
                        <Submit>Submit your message!</Submit>
                    </ContactForm>
                    <section ref={this.MessageRef}>
                      {this.state.errorMessage && <TextContent>Unfortunately there has been an error submitting your message. Please try again!</TextContent>}
                      {this.state.thankYouMessage && <TextContent>Thank you for your message. We will be in touch shortly!</TextContent>}
                    </section>
                </TextContent>
            </TextSection>
            <Footer />
        </React.Fragment>)
    };
};

export default ContactPage