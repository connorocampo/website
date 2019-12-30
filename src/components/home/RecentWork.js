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
  font-size: 36px;
  margin-bottom: 50px;
  text-align: center;
`

export const ImageContainer = styled.div`
  background: pink;
  display: flex;
  margin-bottom: 50px;
  max-width: 1200px;
  justify-content: space-between;
`

export const Image = styled.img`
  border-radius: 15px;
  box-shadow: 8px 8px 8px rgba(128, 128, 128, 0.1);
  margin: 0.5em;
  height: 200px;
  transition-property: transform;
  transition-duration: 0.2s;
  width: 375px;
`

// export const HR = styled.hr`
//   border: 1px solid #dae1e7;
//   color: blue;
//   padding: 0 1em;
//   width: 100%;
// `

/*
 * Component
 */

class RecentWork extends React.Component {
  render() {
    return (
      <Container>
        <h2 className="recent-work-header" style={{ marginBottom: "50px" }}>
          My Recent Work
        </h2>
        <RecentWorkText className="recent-work-text">
          Here are a few recent front-end development projects.
        </RecentWorkText>
        <ImageContainer className="work-image-container">
          <a
            href="https://sign-in-app.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ProjectMiddle}
              className="image-hover work-image-mobile"
            />
          </a>
          <a
            href="https://connors-mailchimp-app.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ProjectMailchimp}
              className="image-hover work-image-mobile"
            />
          </a>
          <a
            href="https://connorocampo.github.io/react-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ProjectToDo}
              className="image-hover work-image-mobile"
            />
          </a>
        </ImageContainer>
        <span style={{ marginBottom: "200px" }}>
          <div class="recent-work-border-gradient-outline">
            <a
              href="https://github.com/connorocampo"
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
        <ImageContainer className="work-image-container">
          <a
            href="https://connorocampo.github.io/website/static/DesignOne-3104bd0340aebe581a7401e7a45418db.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={DesignSAL} className="image-hover work-image-mobile" />
          </a>
          <a
            href="https://connorocampo.github.io/website/static/DesignModernizingMedicine-0529420cd91e73468b0d0600925981e4.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={trial} className="image-hover work-image-mobile" />
          </a>
          <a
            href="https://connorocampo.github.io/website/static/DesignCharles-ce4541de4767562dcac592ce874099f8.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={DesignCharles}
              className="image-hover work-image-mobile"
            />
          </a>
        </ImageContainer>
        <span style={{ marginBottom: "200px" }}>
          <div class="dribbble-border-gradient-outline">
            <a
              href="https://dribbble.com/connorocampo"
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
        {/* <HR /> */}
      </Container>
    )
  }
}

export default RecentWork
