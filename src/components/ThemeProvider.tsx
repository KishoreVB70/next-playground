"use client";
import React, { createContext, useContext } from 'react'

type Theme = {
  primaryColor: string,
  secondaryColor: string
}

const defaultTheme = {primaryColor: "pink", secondaryColor: "peach"}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {

  return (
    <ThemeContext.Provider value={defaultTheme}  >
        {children}
    </ThemeContext.Provider>
  )
}

//The children can directly use useContext(ThemeContext);
export const useTheme = () => useContext(ThemeContext);