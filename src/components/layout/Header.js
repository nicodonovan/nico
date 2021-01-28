import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Toggle } from "../buttons/toggle"

export default function Header(props) {
  const menuData = [
    { title: "About", link: "/about" },
    { title: "Projects", link: "/projects" },
    { title: "Blog", link: "/blog" },
  ]
  return (
    <Wrapper>
      <TitleWrapper>
        <Link to="/">Nico Donovan</Link>
      </TitleWrapper>

      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem>{item.title}</MenuItem>
          </Link>
        ))}
      </MenuWrapper>
      <ToggleWrapper>
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
      </ToggleWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  width: 100%;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 60px;

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 550px) {
    grid-template: auto auto / auto auto;
    max-width: 400px;
    grid-row-gap: 15px;
    padding: 50px 20px 0px 20px;
    font-size: 20px;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    max-width: 675px;
  }
`

const TitleWrapper = styled.div`
  @media (max-width: 450px) {
    grid-area: 1 / 1 / span 1 / span 1;
  }
`

const ToggleWrapper = styled.div`
  @media (max-width: 450px) {
    grid-area: 1 / 2 / span 1 / span 2;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, auto);
  justify-content: space-evenly;

  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.accent};
  }

  a:hover {
    background-color: ${({ theme }) => theme.hover};
    font-weight: 700;
    text-decoration: none;
    border-radius: 5%;
  }

  @media (max-width: 450px) {
    grid-area: 2 / 1 / span 1 / span 1;
    justify-content: space-between;
  }
`

const MenuItem = styled.div``
