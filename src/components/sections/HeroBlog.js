import React from "react"
import styled from "styled-components"
import phone from "../../../static/images/phone1.jpg"

export default function HeroBlog() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <img src={phone} alt="iPhone 12 Pro on a couch" />
          <p>
            Coming soon! In the meantime you can read my stuff over at{" "}
            <a href="https://medium.com/@nicodonovan">Medium</a>, or any of the
            social media platforms down below.
          </p>
          <p>
            I put this tab here as a way to hold myself accountable for building
            this feature one day. Throughout the process of building my personal
            site I have, found that it is a lot more difficult than it looks. I
            want this to be the perfect representation of my taste and
            sensibilities so you can get an accurate depiction of my online
            self. Fretting over button placement is enough to launch me down an
            hours long rabbit hole of design and questioning if this optimal way
            to do it. But I will no longer let perfect stand in the way of good
            enough.
          </p>
          <p>
            This is the first iteration of what will hopefully be many in my
            lifetime. I hope you’ve enjoyed what you have see so far.
          </p>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
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

  img {
    max-width: 900px;
    border-radius: 1%;

    @media (max-width: 768px) {
      max-width: 675px;
    }
    @media (max-width: 450px) {
      max-width: 350px;
      padding: 0;
    }
  }
`
