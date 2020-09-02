import * as React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { ComponentToImg } from "./ComponentToImg.jsx";
import { CoverImg } from "./CoverImg";
import { coverSettingsState } from "../recoil/atoms";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 3.5;
  justify-content: center;
  text-align: center;
`;

export const Preview: React.FC = () => {
  const coverSettings = useRecoilValue(coverSettingsState);
  return (
    <Container>
      <ComponentToImg>
        <CoverImg
          backgroundColor={coverSettings.backgroundColor}
          borderColor={coverSettings.borderColor}
          borderSize={coverSettings.borderSize}
          imgHeight={coverSettings.imgHeight}
          imgWidth={coverSettings.imgWidth}
          text={coverSettings.text}
          textColor={coverSettings.textColor}
          textSize={coverSettings.textSize}
        />
      </ComponentToImg>
    </Container>
  );
};
