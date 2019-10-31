import React from 'react';
import styled from 'styled-components';

// import { Link } from "gatsby";

import MyBook from "../../assets/images/MyBook.jpg";


/*
 * Styles
 */

export const MaxWidth = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23eaeef2' fill-opacity='0.67' fill-rule='evenodd'/%3E%3C/svg%3E");
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  padding: 0 2rem;
  width: 1100px;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  /* display: flex; */
  margin-bottom: 50px;
`;

export const Header = styled.h2`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin-right: 100px;
  margin-bottom: 0;
`;

export const Subtitle = styled.p`
  font-size: ${props => props.theme.size.bodyMedium};
  margin-top: 10px;
`;

export const YourFirstYearInCode = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Image = styled.img`
  /* margin-right: 25px; */
  width: 325px;
`;

export const Disclaimer = styled.p`
  color: #404040;
  font-size: 10px;
  text-decoration: none;
`;

export const BookTextContainer = styled.div`
  margin-top: 0;
  max-width: 700px;
`;

export const BookText = styled.p`
  margin-top: 0;
`;

export const Blockquote = styled.p`
  border-left: 10px solid #404040;
  margin-top: 0;
  padding-left: 25px;

`;


/*
 * Component
 */

class Book extends React.Component {
  render() {
    return (
      <MaxWidth>
        <Container>
          <HeaderContainer>
            <Header>Co-author of <i>Your First Year in Code</i></Header>
            <Subtitle>A complete guide for new & aspiring developers</Subtitle>
          </HeaderContainer>
          <YourFirstYearInCode>
            <a href="https://leanpub.com/firstyearincode" target="_blank" rel="noopener noreferrer">
              <Image src={MyBook} />
              <Disclaimer><i>*Published name is Connor Ocampo</i></Disclaimer>
            </a>
            <BookTextContainer>
              <BookText>Together with 15 generous contributing authors of the book <i>Your First Year in Code</i>, we've created a publication dedicated to new and aspiring developers. Fortunately, I was able to contribute an inclusion section focusing on minority/LGBTQ+ people for the "Do I fit in?" chapter. Read a snippet of my contribution below:</BookText>
              <Blockquote>
                Do you identify as an LGBT person? Are you in the process of applying for jobs? Are you concerned with how you might fit in and want some tips on how to best go about including this information in your application? If yes, then this section is for you.
                <br />
                <br />
                There are many reasons why someone may want to include these personal details in their application. The most important one being to avoid employment with a company that discriminates. The fact is, discrimination among all spans of minority groups is still a very real occurrence. Because of this, it’s important to safeguard yourself against any potential threat, be it physical, mental or emotional, that may happen.
                <br />
                <br />
                Everyone wants to work for a company where they are accepted and can work comfortably. The good news is, there are steps we can take to ensure this outcome.</Blockquote>
            </BookTextContainer>
          </YourFirstYearInCode>
        </Container>
      </MaxWidth>
    );
  }
}

export default Book;
