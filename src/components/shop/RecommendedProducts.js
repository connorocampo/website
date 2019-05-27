import React from 'react';
import styled from 'styled-components';

/*
 * Styles
 */

export const Container = styled.div`
  margin: 100px 0;
`;

export const Title = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
 `;

export const Text = styled.div`
  line-height: 2;
  margin: 50px 0; 
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductColumn = styled.div`

`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerSmall};
  margin-bottom: 25px;
`;


/*
 * Component
 */

class RecommendedProducts extends React.Component {
  render() {
    return (
      <Container>
        <Title>Recommended Products</Title>
        <Text>Here you’ll find a sample listing of some of the most influential books and podcasts that I feed my brain with. I believe what we consume (media/text/music/etc) has a huge compound effect on how we think. That’s why I’m sharing what’s helped me be a better person in some way or another. If you’ve read or are going to read any of these books, let me know! I’d love to hear your thought on them.
        </Text>
        <ProductContainer>
          <ProductColumn>
            <ProductTitle>Business</ProductTitle>
            <Products>
              <a href="https://amzn.to/2W5i7dY" target="_blank" rel="noopener noreferrer" title="Mastery" className="product-link">Mastery</a>
              <a href="https://amzn.to/2Mbhaw6" target="_blank" rel="noopener noreferrer" title="This Is Marketing" className="product-link">This Is Marketing</a>
              <a href="https://amzn.to/2McmlMh" target="_blank" rel="noopener noreferrer" title="The Purple Cow" className="product-link">The Purple Cow</a>
            </Products>
          </ProductColumn>
          <ProductColumn>
            <ProductTitle>Leadership</ProductTitle>
            <Products>
              <a href="https://amzn.to/2HDIazX" target="_blank" rel="noopener noreferrer" title="Tribes" className="product-link">Tribes</a>
              <a href="https://amzn.to/2M9gdnW" target="_blank" rel="noopener noreferrer" title="Leap First" className="product-link">Leap First</a>
            </Products>
          </ProductColumn>
          <ProductColumn>
            <ProductTitle>Personal Finance</ProductTitle>
            <Products>
              <a href="https://amzn.to/2YQjiKS" target="_blank" rel="noopener noreferrer" title="The Total Money Makeover" className="product-link">The Total Money Makeover</a>
              <a href="https://amzn.to/2McmGP3" target="_blank" rel="noopener noreferrer" title="The Millionaire Next Door" className="product-link">The Millionaire Next Door</a>
            </Products>
          </ProductColumn>
          <ProductColumn>
            <ProductTitle>Personal Development</ProductTitle>
            <Products>
              <a href="https://amzn.to/2K1Y9JG" target="_blank" rel="noopener noreferrer" title="The Magic of Thinking Big" className="product-link">The Magic of Thinking Big</a>
              <a href="https://amzn.to/2Qo8m4t" target="_blank" rel="noopener noreferrer" title="The Icarus Deception" className="product-link">The Icarus Deception</a>
              <a href="https://amzn.to/2HBTY5H" target="_blank" rel="noopener noreferrer" title="What Every Body Is Saying" className="product-link">What Every Body Is Saying</a>
            </Products>
          </ProductColumn>
        </ProductContainer>
      </Container>
    );
  }
}

export default RecommendedProducts;