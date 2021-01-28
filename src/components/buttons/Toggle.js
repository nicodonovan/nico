import React from "react"
import styled from "styled-components"
import { Sunrise, Sunset } from "react-feather"

export function Toggle(props) {
  const { theme, toggleTheme } = props
  const isLight = theme === "light"
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <Sunset />
      <Sunrise color="#D3D3D3" />
    </ToggleContainer>
  )
}

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.backgroundColor};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 35px;
  cursor: pointer;
  font-size: 0.5rem;
  overflow: hidden;
  padding: 10px 20px;
  width: 7rem;
  height: 3rem;
  outline: none;

  @media (max-width: 450px) {
    transform: scale(0.7);
  }

  svg {
    height: 1.5rem;
    width: 2.5rem;
    transition: all 0.25s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(-100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(100px)" : "translateY(-25px)"};
    }
  }
`
