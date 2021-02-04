import React from "react"
import styled from "styled-components"
import desk from "../../../static/images/flat-lay.jpg"

export default function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <img src={desk} alt="flat lay of desk with laptop and accessories" />
        <TextWrapper>
          <p>
            Hello! I'm Web Developer, teacher and recovering pre-med student.
            I've had a non-traditional journey in life thus far, but my north
            star has always been how can I be useful. I love building minimal,
            functional front ends, but right now I'm hoping to land my first job
            in tech so let's get in <a href="#skills">touch!</a>
          </p>
          <Line />
          <h3>What I can do:</h3>
          <Skills id="skills">
            <li>
              <span>HTML5</span>
            </li>
            <li className="js">
              <span>JavaScript ES6</span>
            </li>
            <li className="styled">
              <span>Styled Components</span>
            </li>
            <li className="git">
              <span>Git</span>
            </li>
            <li className="css">
              <span>CSS</span>
            </li>
            <li className="react">
              <span>React</span>
            </li>
            <li className="gatsby">
              <span>Gatsby</span>
            </li>
            <li className="sql">
              <span>SQL</span>
            </li>
          </Skills>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
  }

  a:hover {
    background-color: ${({ theme }) => theme.hover};
    font-weight: 700;
    text-decoration: underline;
    border-radius: 5%;
  }

  @media (max-width: 450px) {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;

  img {
    width: 900px;
    height: 450px;
    border-radius: 1%;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      width: 675px;
      height: 340px;
    }
    @media (max-width: 450px) {
      width: 350px;
      height: 175px;
    }
  }

  @media (max-width: 768px) {
    max-width: 675px;
  }

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 0 20px 0 20px;
  }
`

const TextWrapper = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;

  @media (max-width: 450px) {
    line-height: 130%;

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 25px;

    @media (max-width: 450px) {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
`
const Skills = styled.ul`
  display: grid;
  grid-template: auto auto / repeat(4, auto);
  justify-items: start;
  align-items: center;
  gap: 10px;
  font-size: 20px;

  li {
    list-style-type: circle;
    list-style-position: inside;
    color: ${({ theme }) => theme.accent};
  }

  li span {
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 450px) {
    grid-template: repeat(4, auto) / auto auto;
    font-size: 16px;

    li.js {
      grid-area: 2 / 1 / span 1 / span 1;
    }
    li.css {
      grid-area: 1 / 2 / span 1 / span 1;
    }
    li.react {
      grid-area: 2 / 2 / span 1 / span 1;
    }
    li.gatsby {
      grid-area: 3 / 2 / span 1 / span 1;
    }
  }
`

const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`
