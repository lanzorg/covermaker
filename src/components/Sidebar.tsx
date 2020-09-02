import * as React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { coverSettingsState } from "../recoil/atoms";

const Container = styled.div`
  align-items: center;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  justify-content: center;
  padding: 0 3rem;
  h1 {
    margin: 0 0 2rem 0;
  }
  label {
    margin-top: 1.5rem;
  }
  input,
  textarea {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const Sidebar: React.FC = () => {
  const [coverSettings, setCoverSettings] = useRecoilState(coverSettingsState);
  const handleChange = (e: any) => {
    const value = e.target.value;
    setCoverSettings({
      ...coverSettings,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <h1>CM</h1>

      <label htmlFor="text">Text</label>
      <textarea
        name="text"
        value={coverSettings.text}
        onChange={handleChange}
      />

      <label htmlFor="textSize">TEXT-SIZE</label>
      <input
        type="number"
        name="textSize"
        value={coverSettings.textSize}
        onChange={handleChange}
      />
      <label htmlFor="textColor">TEXT-COLOR</label>
      <input
        type="text"
        name="textColor"
        value={coverSettings.textColor}
        onChange={handleChange}
      />

      <label htmlFor="borderSize">BORDER-SIZE</label>
      <input
        type="number"
        name="borderSize"
        value={coverSettings.borderSize}
        onChange={handleChange}
      />
      <label htmlFor="borderColor">BORDER-COLOR</label>
      <input
        type="border"
        name="borderColor"
        value={coverSettings.borderColor}
        onChange={handleChange}
      />

      <label htmlFor="imgWidth">IMG-WIDTH</label>
      <input
        type="number"
        name="imgWidth"
        value={coverSettings.imgWidth}
        onChange={handleChange}
      />
      <label htmlFor="imgHeight">IMG-HEIGHT</label>
      <input
        type="number"
        name="imgHeight"
        value={coverSettings.imgHeight}
        onChange={handleChange}
      />
    </Container>
  );
};
