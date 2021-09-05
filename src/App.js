import React, { useState, useEffect } from "react";
import MainLayout from "./components/MainLayout";
import Begin from "../src/components/begin/Begin";
import "./index.css";
import { useWhiteMode } from "./styles/useWhiteMode";
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import styled, {ThemeProvider} from 'styled-components';


const Mode = styled.body`
background-color: black;
`

const App = () => {
  const [loading, setLoading] = useState(false);
  const [theme , toogleTheme ] = useWhiteMode()
  console.log(theme)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  const themeMode = theme === 'ligth' ? darkTheme : lightTheme;
  return <>
    {loading ?
    <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <Begin /> 
    </ThemeProvider>  :
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
        <MainLayout theme ={theme} toogleTheme={toogleTheme}/>
    </ThemeProvider>
    }
  </>;
};

export default App;
