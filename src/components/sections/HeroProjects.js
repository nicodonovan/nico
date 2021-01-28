import React from "react"
import styled from "styled-components"
import Card from "../cards/Card"

export default function HeroProjects() {
  return (
    <Wrapper>
      <TextWrapper>
        <p>
          These are some of the favorite things I have made thus far. A lot of
          them were part of completing the{" "}
          <a href="https://www.freecodecamp.org/nicodonovan">FreeCodeCamp</a>{" "}
          curriculum. You can find all of my projects at{" "}
          <a href="https://codepen.io/nicodonovan">Codepen</a> and{" "}
          <a href="https://github.com/nicodonovan">Github</a>
        </p>
      </TextWrapper>
      <ContentWrapper>
        <Card
          title="Pediatric Anesthesia Calculator"
          description="A calculator and reference guide for the UCSD Anesthesia Residents"
          tools="Built with React and Boostrap, hosted on Vercel "
          link="https://anesthesia.vercel.app/"
          codepen={false}
        />
        <Card
          title="Pomodoro Clock"
          description="A minimal pomodoro clock"
          tools="Built with React, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/BaKdJgm"
          codepen={true}
        />
        <Card
          title="Calculator"
          description="A minimal calculator"
          tools="Built with React, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/Rwaaojg"
          codepen={true}
        />
        <Card
          title="Tree Map"
          description="Data visualization for the top 100 highest grossing movies"
          tools="Built with HTML/CSS/D3, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/XWXOrNp"
          codepen={true}
        />
        <Card
          title="Choropleth Map"
          description="Data visualization for the percentage of adults age 25 and older with a bachelor's degree or higher"
          tools="Built with HTML/CSS/D3, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/MWKzKoY"
          codepen={true}
        />
        <Card
          title="Heat Map"
          description="Data visualization for monthly global land surface temperatures from 1753-2015"
          tools="Built with HTML/CSS/D3, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/MWKPKKw"
          codepen={true}
        />
        <Card
          title="Scatterplot"
          description="Data visualization for cheating allegations in professional cycling."
          tools="Built with HTML/CSS/D3, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/KKVeKGM"
          codepen={true}
        />
        <Card
          title="Bar Chart"
          description="Data visualization for the US GDP from 1947-2015"
          tools="Built with HTML/CSS/D3, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/VweXgVQ"
          codepen={true}
        />
        <Card
          title="Random Quote Machine"
          description="A fun starter project that helps you gain a little inspiration for your day"
          tools="Built HTML/CSS/jQuery, found on Codepen"
          link="https://codepen.io/nicodonovan/pen/YzwpvLv"
          codepen={true}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 50px 0px;
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;

  @media (max-width: 768px) {
    max-width: 675px;
  }
`
const TextWrapper = styled.div`
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  padding-bottom: 50px;

  @media (max-width: 450px) {
    font-size: 16px;
    padding: 0px 20px 50px 20px;
    text-align: left;
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 50px;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template: repeat(4, auto) / repeat(2, auto);
    grid-gap: 50px 100px;
  }

  @media (max-width: 450px) {
    grid-template: repeat(9, auto) / auto;
    grid-gap: 50px 100px;
  }
`
