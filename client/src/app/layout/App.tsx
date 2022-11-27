import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
    }
  })


  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleThemeChange={handleThemeChange} darkMode={darkMode}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;


