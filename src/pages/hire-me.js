import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`;

const Subheading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin-bottom: 50px;
`;

export const Text = styled.div`
  line-height: 2;
  margin: 50px 0 100px 0; 
`;

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Hire Me | Connor Ocampo's Website</title>
        <meta name="Hire Me | Connor Ocampo's Website" content="Hire Me | Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
      </Helmet>
      <Header />
      <Heading>Hire Connor</Heading>
      <Subheading>Speaking</Subheading>
      <Text>Expenses (airfare and hotel) are extra. If we mutually agree that this is a good fit, you’ll receive a firm quotation on the fee and the expenses. I’ll make my own travel arrangements. The fee and expenses will be due (to be received) two weeks before the actual date.</Text>
      <form action="https://formspree.io/connorocampo@gmail.com" method="POST">
        <label type="text" htmlFor="fname-label">First Name</label>
        <input type="text" htmlFor="name" />
        <label type="text" htmlFor="lname-label">Last Name</label>
        <input type="text" htmlFor="name" />
        <label type="text" htmlFor="email-label">Email</label>
        <input type="email" htmlFor="_replyto" />
        <label type="text" htmlFor="state-label">State</label>
        <select>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <label type="text" htmlFor="date-label">Preferred Date</label>
        <input type="date"></input>
        <label type="text" htmlFor="speaking-type-label">Speaking Type</label>
        <select>
          <option value="AZ">Conference</option>
          <option value="AL">Internal</option>
          <option value="AK">Keynote</option>
          <option value="AR">Local Meetup</option>
          <option value="CA">Other</option>
        </select>
        <label type="text" htmlFor="attendees-label">Number of Attendees</label>
        <select>
          <option value="AZ">0-25</option>
          <option value="AL">25-50</option>
          <option value="AK">50-100</option>
          <option value="AR">100-200</option>
          <option value="CA">200+</option>
        </select>
        <label type="text" htmlFor="comments-label">Comments</label>
        <textarea name="message" placeholder="Test Message"></textarea>
        <button type="submit" value="Send">Submit</button>
      </form>
      <Footer />
    </Layout>
  </ThemeProvider>
)
