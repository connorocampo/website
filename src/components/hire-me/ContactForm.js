import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import themeSettings from '../../components/base/settings';

/*
 * Styles
 */

export const Container = styled.div`
  align-items: center;
  background: rgb(245, 247, 248);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  padding: 50px 0;
`;

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin-bottom: 50px;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  font-size: ${props => props.theme.size.bodyMedium};
  justify-content: space-between;
  width: 840px;
`;

const LeftForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const BottomForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  border: 1px solid #474747;
  font-size: ${props => props.theme.size.bodySmall};
  height: 25px;
  margin-bottom: 20px;
`;

const FormSelect = styled.select`
  border: 1px solid #474747;
  font-size: ${props => props.theme.size.bodySmall};
  height: 30px;
  margin-bottom: 20px;
`;

/*
 * Component
 */

class ContactForm extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container>
          <Heading>Have Connor Speak at Your Event</Heading>
          <form action="https://formspree.io/connorocampo@gmail.com" method="POST">
            <FormContainer>
              <LeftForm>
                <FormLabel type="text" htmlFor="fname-label">First Name</FormLabel>
                <FormInput type="text" htmlFor="name" />
                <FormLabel type="text" htmlFor="lname-label">Last Name</FormLabel>
                <FormInput type="text" htmlFor="name" />
                <FormLabel type="text" htmlFor="email-label">Email</FormLabel>
                <FormInput type="email" htmlFor="_replyto" />
              </LeftForm>
              <RightForm>
                <FormLabel type="text" htmlFor="state-label">State</FormLabel>
                <FormSelect>
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
                </FormSelect>
                <FormLabel type="text" htmlFor="date-label">Preferred Date</FormLabel>
                <FormInput type="date"></FormInput>
                <FormLabel type="text" htmlFor="speaking-type-label">Speaking Type</FormLabel>
                <FormSelect>
                  <option value="AZ">Conference</option>
                  <option value="AL">Internal</option>
                  <option value="AK">Keynote</option>
                  <option value="AR">Local Meetup</option>
                  <option value="CA">Other</option>
                </FormSelect>
              </RightForm>
            </FormContainer>
            <BottomForm>
              <FormLabel type="text" htmlFor="attendees-label">Number of Attendees</FormLabel>
              <FormSelect>
                <option value="AZ">0-25</option>
                <option value="AL">25-50</option>
                <option value="AK">50-100</option>
                <option value="AR">100-200</option>
                <option value="CA">200+</option>
              </FormSelect>
              <FormLabel type="text" htmlFor="comments-label">Comments</FormLabel>
              <textarea name="message" placeholder="Enter your comments here..." style={{ height: '150px', fontSize: '16px', marginBottom: '25px' }}></textarea>
              <button type="submit" value="Send" style={{ background: '#0090D9', border: 'none', color: '#ffffff', fontSize: '16px', padding: '10px 0' }}>Submit</button>
            </BottomForm>
          </form>
        </Container>
      </ThemeProvider>
    );
  }
}

export default ContactForm;