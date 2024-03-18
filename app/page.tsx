"use client";
import GlobalStyles from "./general/utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./general/utils/theme";
import Header from "./components/Header";
import Hero from "./components/Hero";

const page = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
      </ThemeProvider>
    </>
  );
};

export default page;
