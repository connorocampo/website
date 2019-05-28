import React from 'react';
import styled from 'styled-components';

/*
 * Styles
 */

export const Container = styled.div`
  margin: 100px 0;
  width: 1000px;
`;

export const MaxWidth = styled.div`
  background: #F5F7F8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

export const Title = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  text-align: center;
  text-transform: uppercase;
`;

export const Placeholder = styled.div`
  background: #d8d8d8;
  height: 352px;
  width: 272px;
  margin: 50px auto;
`;

export const Text = styled.div`
  line-height: 2;
`;

/*
 * Component
 */

class MysteryBook extends React.Component {
  render() {
    return (
      <MaxWidth>
        <Container>
          <Title>Coming Soon</Title>
          <Placeholder></Placeholder>
          <Text>Mystery Book is a book I’ve been working on for the past 6 months. You’ll find a sample listing of some of the most influential books and podcasts that I feed my brain with. I believe what we consume (media/text/music/etc) has a huge compound effect on how we think. That’s why I’m sharing what’s helped me be a better person in some way or another. If you’ve read or are going to read any of these books, let me know! I’d love to hear your thought on them.</Text>
        </Container>
      </MaxWidth>
    );
  }
}

export default MysteryBook;