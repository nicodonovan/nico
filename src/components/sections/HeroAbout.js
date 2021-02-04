import React from "react"
import styled from "styled-components"

export default function HeroAbout() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <p>
            For most of my life, my involvement in tech was giddily scrolling
            through my Twitter and RSS feeds hoping to glean any information
            about the next iPhone or how this startup was going to revolutionize
            an industry. On podcasts, like one of my favorites{" "}
            <a href="atp.fm">ATP</a>, I would listen to advice about how it’s
            “never too late” to get into tech yet I would find excuses to not
            take the plunge.
          </p>
          <p>
            I wish there was a cinematic flashbulb moment I could point to that
            changed everything. But in reality this has been a gradual process
            that included a lot of hard work, online tutorials, and tough life
            lessons. The lessons and certificates through{" "}
            <a href="https://www.freecodecamp.org/settings">FreeCodeCamp</a>{" "}
            have been the main source for progress in my web development
            journey. I have completed all of the Front-End Development
            Certificates and I am currently finishing the full stack JavaScript
            track.
          </p>
          <p>
            In past lives, I researched the epigenetic mechanisms of metastasis
            in melanoma and breast cancer at the{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Nicholas+Donovan">
              John Wayne Cancer Institute
            </a>
            , taught all grades and subjects at the{" "}
            <a href="https://www.lbschools.net/">
              Long Beach Unified School District{" "}
            </a>{" "}
            as a substitute teacher, and managed a polling location for the{" "}
            <a href="https://www.sdvote.com/">County of San Diego</a> in the
            November 2020 General Election. These were the formative experiences
            that taught me the soft skills of communication, patience and
            leadership that shaped me into the well-rounded person I am always
            trying to maintain.
          </p>
          <p>
            While I am still hoping to land my first job in tech, I know I have
            chosen the right path because I can wake up everyday, in the middle
            of a pandemic, excited to learn something new no matter how many
            google and stack overflow searches it may take.
          </p>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
`

const ContentWrapper = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 675px;
  }

  @media (max-width: 450px) {
    padding: 0px 20px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  gap: 30px;
  font-weight: 300;
  font-size: 20px;
  line-height: 140%;

  @media (max-width: 450px) {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.accent};
    font-weight: 500;
  }

  a:hover {
    background-color: ${({ theme }) => theme.hover};
    text-decoration: underline;
    border-radius: 5%;
    font-weight: 700;
  }
`
