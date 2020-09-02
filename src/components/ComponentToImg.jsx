import React, { useRef } from "react";
import styled from "styled-components";
import { exportComponentAsPNG } from "react-component-export-image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DownloadButton = styled.button`
  background: #15d798;
  border-radius: 5px;
  border: 0;
  color: #ffffff;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 2rem 0 0 0;
  padding: 20px 30px;
  text-align: center;
`;

export const ComponentToImg = ({ children }) => {
  const componentRef = useRef();
  return (
    <Container>
      <div ref={componentRef}>{children}</div>
      <DownloadButton onClick={() => exportComponentAsPNG(componentRef)}>
        Download as PNG
      </DownloadButton>
    </Container>
  );
};
