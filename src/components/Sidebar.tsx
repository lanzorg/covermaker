import * as React from "react";
import { Box } from "@material-ui/core";
import { coverSettingsState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  align-items: center;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  justify-content: center;
  padding: 0 3rem;
  > div {
    margin-top: 1.2rem;
  }
`;

export const Sidebar: React.FC = () => {
  const [coverSettings, setCoverSettings] = useRecoilState(coverSettingsState);
  const handleChange = (e: any) => {
    const value = e.target.value;
    setCoverSettings({
      ...coverSettings,
      [e.target.id]: value,
    });
  };
  return (
    <Container>
      <img src={logo} height="150" alt="logo" />
      <Box mb={3} mt={1}>
        <Typography variant="h5" component="h1">
          CoverMaker
        </Typography>
      </Box>
      <TextField
        fullWidth
        id="text"
        label="Text"
        multiline
        value={coverSettings.text}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="textSize"
        label="Text Size"
        type="number"
        value={coverSettings.textSize}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="textColor"
        label="Text Color"
        value={coverSettings.textColor}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="borderSize"
        label="Border Size"
        type="number"
        value={coverSettings.borderSize}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="borderColor"
        label="Border Color"
        value={coverSettings.borderColor}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="imgWidth"
        label="Image Width"
        type="number"
        value={coverSettings.imgWidth}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="imgHeight"
        label="Image Height"
        type="number"
        value={coverSettings.imgHeight}
        onChange={handleChange}
      />
    </Container>
  );
};
