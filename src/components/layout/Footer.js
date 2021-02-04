import React from "react"
import styled from "styled-components"
import * as Icon from "react-feather"

export default function Footer() {
  return (
    <Wrapper>
      <ContactWrapper>
        <a href="https://github.com/nicodonovan">
          <Icon.GitHub size={36} />
        </a>
        <a href="https://www.instagram.com/nico__donovan/">
          <Icon.Instagram size={36} />
        </a>
        <a href="https://docs.google.com/document/d/1_YSJiAE52Bg7GcqqDyV_AChM_15gfBJnzlKopYqhEVI/edit?usp=sharing">
          <Icon.FileText size={36} />
        </a>
        <a href="mailto:nicodonovan@hey.com">
          <Icon.Mail size={36} />
        </a>
      </ContactWrapper>
      <TextWrapper>
        <p>
          Written, designed and built by me, using{" "}
          <a href="https://www.gatsbyjs.com/">GatsbyJS</a> and
          <a href="https://styled-components.com/"> Styled Components</a>.
        </p>
        <p>
          Icons from <a href="https://feathericons.com/">Feather</a>
          <Icon.Feather size={12} />
        </p>
        <p>Nico Donovan &copy; 2021</p>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 65px 0px;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    max-width: 675px;
  }

  @media (max-width: 450px) {
    padding: 0px 20px 30px 20px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  font-size: 12px;
  justify-items: center;
  line-height: 150%;

  @media (max-width: 450px) {
    font-size: 10px;
    line-height: 200%;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    font-weight: 500;
  }
  a:hover {
    background-color: ${({ theme }) => theme.hover};
    font-weight: 700;
    text-decoration: none;
    border-radius: 10%;
  }
`
