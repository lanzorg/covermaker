import { atom } from "recoil";

export const coverSettingsState = atom({
  key: "coverSettingsState",
  default: {
    "backgroundColor":"red",
    "borderColor":"#e9e9e9",
    "borderSize":30,
    "imgHeight":480,
    "imgWidth":720,
    "text":"Lorem ipsum dolor sit, amet",
    "textColor":"blue",
    "textSize":25
  }
});