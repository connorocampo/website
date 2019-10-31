import React from 'react';
import styled from 'styled-components';

import MyBook from '../../assets/images/MyBook.jpg';

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
`;

export const CTAContainer = styled.div`
`;

export const CTA = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin-bottom: 50px;
`;

export const CTAText = styled.p`
  line-height: 2;
`;

export const Image = styled.img`
  height: 352px;
  margin-left: 100px;
  margin-bottom: 100px;
`;

/*
 * Component
 */

class BookSection extends React.Component {
  render() {
    return (
      <Container>
        <CTAContainer>
          <CTA>Get Your Copy Today!</CTA>
          <CTAText>Your First Year In Code was written for new and aspiring developers. With practical advice on topics like resume writing, ethics, job titles, and what to do when you're stuck.</CTAText>
          <CTAText>I’m honered to have contributed an LGBT section of the “Do I fit in?” chapter.
          </CTAText>
          <CTAText>Read more about the book <a href="https://leanpub.com/firstyearincode" target="_blank" rel="noopener noreferrer">here</a>.
          </CTAText>
          <CTAText>(Coming out in July 2019)</CTAText>
        </CTAContainer>
        <a href="https://leanpub.com/firstyearincode" target="_blank" rel="noopener noreferrer"><Image src={MyBook} alt="Your First Year In Code Book" /></a>
      </Container>
    );
  }
}

export default BookSection;