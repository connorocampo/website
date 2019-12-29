import React from "react"
import styled from "styled-components"

// Media

/*
 * Styles
 */

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;
  margin-top: 200px;
  margin-bottom: 300px;
`

// export const Image = styled.img`
//   border-radius: 15px;
//   box-shadow: 8px 8px 8px rgba(128, 128, 128, 0.1);
//   margin-bottom: 50px;
//   width: 375px;
// `

/*
 * Component
 */

class Testimonials extends React.Component {
  render() {
    return (
      <Container>
        <h2 style={{ marginBottom: "50px" }}>Testimonials</h2>
        <p style={{ fontSize: "24px" }}>
          Some nice words from people I’ve worked with.
        </p>
      </Container>
    )
  }
}

export default Testimonials
