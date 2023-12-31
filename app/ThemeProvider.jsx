"use client"

import { ThemeProvider } from "next-themes"

const themeProvider = ({children}) => {
  return (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  )
}

export default themeProvider