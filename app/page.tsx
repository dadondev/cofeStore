"use client";
import GlobalStyles from "./general/utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./general/utils/theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

const page = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default page;
