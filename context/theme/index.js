import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(false)
  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext')
  }
  return context
}
