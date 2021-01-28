import React, { useState } from "react"
import styled from "styled-components"
import { Codepen, Chrome } from "react-feather"
import "./Card.css"

export default function Card(props) {
  const [switcher, setSwitcher] = useState(true)

  return (
    <Wrapper className={switcher ? "flip-container" : "flip-container click"}>
      <div className="flipper">
        <div className="front">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button onClick={() => setSwitcher(false)}>More Info</button>
        </div>
        <div className="back">
          <p>{props.tools}</p>
          <a href={props.link}>{props.codepen ? <Codepen /> : <Chrome />}</a>
          <button onClick={() => setSwitcher(true)}>Go Back</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 10px;

  button {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    border-radius: 10px;
    max-width: 150px;
    max-height: 60px;
    justify-self: center;
    font-size: 10px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-size: 12px;
    color: ${({ theme }) => theme.accent};
    height: 20px;
    width: 100px;
    justify-self: center;
    align-self: center;
  }
`
