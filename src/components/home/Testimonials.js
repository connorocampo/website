import React from "react"
import styled from "styled-components"

// Media

import TestimonialTracy from "../../assets/images/TestimonialTracy.jpeg"

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

export const Image = styled.img`
  border-radius: 50%;
  height: 175px;
  margin-bottom: 50px;
  width: 175px;
`

export const Testimonial = styled.div`
  text-align: center;
`

export const TestimonialText = styled.p`
  font-size: 36px;
  margin-bottom: 50px;
  max-width: 1000px;
  padding: 0 1em;
`

export const Title = styled.p`
  font-size: 24px;
`

/*
 * Component
 */

class Testimonials extends React.Component {
  render() {
    return (
      <Container>
        <h2 style={{ marginBottom: "50px" }}>Testimonials</h2>
        <p style={{ fontSize: "24px", marginBottom: "50px" }}>
          Some nice words from people I’ve worked with.
        </p>
        <Testimonial>
          <Image
            src={TestimonialTracy}
            alt="Tracy G."
            className="bio-thumbnail"
          />
          <TestimonialText>
            “Connor is a sincere, hard-working coworker that has supervised
            multiple projects in our marketing efforts. Wherein he has showcased
            his skill of leadership, dedication and creativity. A team player
            that was also helpful in other areas of the company. He would make a
            great asset to any organization.”
          </TestimonialText>
          <h3 style={{ marginBottom: "10px" }}>Tracy Guiteau</h3>
          <Title>Web/Graphic Designer</Title>
        </Testimonial>
      </Container>
    )
  }
}

export default Testimonials
