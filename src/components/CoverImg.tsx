import * as React from "react";
import styled from "styled-components";

type CoverImgProps = {
  backgroundColor: string;
  borderColor: string;
  borderSize: number;
  imgHeight: number;
  imgWidth: number;
  text: string;
  textColor: string;
  textSize: number;
};

const Container = styled.div<CoverImgProps>`
  align-items: center;
  background: ${(props) => props.backgroundColor};
  border: ${(props) => props.borderSize}px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  display: flex;
  font-size: ${(props) => props.textSize}px;
  height: ${(props) => props.imgHeight}px;
  justify-content: center;
  line-height: 3em;
  padding: 3rem;
  text-align: center;
  width: ${(props) => props.imgWidth}px;
`;

export const CoverImg: React.FC<CoverImgProps> = (props) => (
  <Container {...props}>
    <h2>{props.text}</h2>
  </Container>
);
