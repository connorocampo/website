import React from "react"
import styled from "styled-components"

// Media
import ProjectMiddle from "../../assets/images/ProjectMiddle.png"
import ProjectMailchimp from "../../assets/images/ProjectMailchimp.png"
import ProjectToDo from "../../assets/images/ProjectToDo.png"
import DesignSAL from "../../assets/images/DesignSAL.png"
import trial from "../../assets/images/trial.png"
import DesignCharles from "../../assets/images/DesignCharles.png"

import github from "../../assets/images/icons/github.svg"
import dribbble from "../../assets/images/icons/dribbble.svg"

/*
 * Styles
 */

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;
`

export const RecentWorkText = styled.p`
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  font-size: 36px;
  margin-bottom: 50px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  justify-content: space-between;
`

export const Image = styled.img`
  border-radius: 15px;
  box-shadow: 8px 8px 8px rgba(128, 128, 128, 0.1);
  margin-bottom: 50px;
  width: 375px;
`

export const HR = styled.hr`
  border: 1px solid #dae1e7;
  color: blue;
  padding: 0 1em;
  width: 100%;
`

/*
 * Component
 */

class RecentWork extends React.Component {
  render() {
    return (
      <Container>
        <h2 style={{ marginBottom: "50px" }}>Recent Work</h2>
        <RecentWorkText>
          Here are a few recent front-end development projects.
        </RecentWorkText>
        <ImageContainer>
          <Image src={ProjectMiddle} />
          <Image src={ProjectMailchimp} />
          <Image src={ProjectToDo} />
        </ImageContainer>
        <span style={{ marginBottom: "200px" }}>
          <div class="recent-work-border-gradient-outline">
            <a
              href="mailto:connorocampo@gmail.com"
              className="gradient-btn recent-work-border-gradient-fill-light gradient-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="github icon"
                style={{
                  marginRight: "10px",
                  height: "28px",
                }}
              />
              <span className="is-gradient">View code in GitHub</span>
            </a>
          </div>
        </span>
        <RecentWorkText>Here are a few recent design projects.</RecentWorkText>
        <ImageContainer>
          <Image src={DesignSAL} />
          <Image src={trial} />
          <Image src={DesignCharles} />
        </ImageContainer>
        <span style={{ marginBottom: "200px" }}>
          <div class="dribbble-border-gradient-outline">
            <a
              href="mailto:connorocampo@gmail.com"
              className="gradient-btn dribbble-border-gradient-fill-light gradient-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dribbble}
                alt="dribbble icon"
                style={{
                  marginRight: "10px",
                  height: "28px",
                }}
              />
              <span className="is-gradient">View more in Dribbble</span>
            </a>
          </div>
        </span>
        <HR />
      </Container>
    )
  }
}

export default RecentWork
