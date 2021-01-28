import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyles"
import { lightTheme, darkTheme } from "../styles/theme"
import { useDarkMode } from "../buttons/useDarkMode"
import Footer from "./Footer"
import Header from "./Header"

function Layout({ children }) {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
