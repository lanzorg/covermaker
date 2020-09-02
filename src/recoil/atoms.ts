import { atom } from "recoil";

export const coverSettingsState = atom({
  key: "coverSettingsState",
  default: {
    "backgroundColor":"#3689e6",
    "borderColor":"#8cd5ff",
    "borderSize":5,
    "imgHeight":480,
    "imgWidth":720,
    "text":"Your text here",
    "textColor":"#fafafa",
    "textSize":25
  }
});