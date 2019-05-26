import React from 'react';
import styled from 'styled-components';

import Book from '../../assets/images/Book.jpg';

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
`;

export const CTAContainer = styled.div`
`;

export const CTA = styled.div`
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
  margin-bottom: 50px;
`;

export const CTAText = styled.div`
  line-height: 2;
`;

export const BookLink = styled.div`
  color: #333333;
  margin-top: 25px;
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
          <CTAText><strong>Your First Year In Code</strong> was written for new and aspiring developers. With practical advice on topics like resume writing, ethics, job titles, and what to do when you're stuck. I’m honered to have contributed an LGBT section of the “Do I fit in?” chapter.
          </CTAText>
          <a href="https://leanpub.com/firstyearincode" target="_blank" rel="noopener noreferrer"><BookLink>(Coming out in July 2019)</BookLink></a>
        </CTAContainer>
        <a href="https://leanpub.com/firstyearincode" target="_blank" rel="noopener noreferrer"><Image src={Book} /></a>
      </Container>
    );
  }
}

export default BookSection;