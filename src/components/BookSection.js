import React from 'react';
import styled from 'styled-components';

import Book from '../assets/images/Book.jpg';

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
`;

export const CTAContainer = styled.div`
  ${'' /* display: flex; */}
`;

export const CTA = styled.div`
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
  margin-bottom: 50px;
`;

export const CTAText = styled.div`
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
          <CTAText><strong>Your First Year In Code</strong> was written for new and aspiring developers. With practical advice on topics like resume writing, ethics, job titles, and what to do when you're stuck. I’m honered to have contributed an LGBT section of the “Do I fit in?” chapter.
          </CTAText>
          <p>(Coming out in July 2019)</p>
        </CTAContainer>
        <Image src={Book} />
      </Container>
    );
  }
}

export default BookSection;