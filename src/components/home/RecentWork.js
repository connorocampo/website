import React from "react"
import styled from "styled-components"

// Media
import ProjectMiddle from "../../assets/images/ProjectMiddle.png"
import ProjectMailchimp from "../../assets/images/ProjectMailchimp.png"
import ProjectToDo from "../../assets/images/ProjectToDo.png"
import github from "../../assets/images/icons/github.svg"

/*
 * Styles
 */

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;
  margin-bottom: 300px;
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
  width: 1200px;
  justify-content: space-between;
  margin-bottom: 50px;
`

export const Image = styled.img`
  border-radius: 15px;
  width: 375px;
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
        <span style={{ marginBottom: "100px" }}>
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
      </Container>
    )
  }
}

export default RecentWork
