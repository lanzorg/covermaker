import * as React from "react";
import { RecoilRoot } from "recoil";
import styled, { createGlobalStyle } from "styled-components";

import { Sidebar } from "./Sidebar";
import { Preview } from "./Preview";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const App: React.FC = () => (
  <RecoilRoot>
    <Container>
      <GlobalStyles />
      <Sidebar />
      <Preview />
    </Container>
  </RecoilRoot>
);
