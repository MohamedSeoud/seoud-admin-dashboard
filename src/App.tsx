import Routes from './routes'
import './App.css';
import { ThemeContextProvider, useMode } from './them';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


function App() {
  const[ theme ]  = useMode();


  return (
    <>
      <ThemeContextProvider >
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes/>
      </ThemeProvider>
    </ThemeContextProvider>
    </>
  )
}

export default App
