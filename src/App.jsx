
import { createContext, useState } from 'react'
import './App.css'
import { MyContextProvider } from './MyContext'
import MyRoutes from './MyRoutes'
import './mystyle.css'

export const ThemeContext = createContext()
function App() {
  const [theme, setTheme] = useState('LIGHT')
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <MyContextProvider>
          <button style={{
            position: 'fixed',
            top: '40px',
            right: '40px',
            zIndex: 99
          }}
            onClick={() => {
              if (theme == "LIGHT") {
                setTheme("DARK")
              }
              else {
                setTheme("LIGHT")
              }
            }}
          >{theme}</button>
          <MyRoutes />

        </MyContextProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
