import React, { useRef } from "react";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from "styled-components";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComponentToImg = ({ children }) => {
  const componentRef = useRef();
  return (
    <Container>
      <div ref={componentRef}>{children}</div>
      <Box mt={3}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button onClick={() => exportComponentAsJPEG(componentRef)}>
            JPG
          </Button>
          <Button onClick={() => exportComponentAsPDF(componentRef)}>
            PDF
          </Button>
          <Button onClick={() => exportComponentAsPNG(componentRef)}>
            PNG
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};
