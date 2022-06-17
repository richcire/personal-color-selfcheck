import { springWarmData } from "./ResultsSample";
import { atom } from "recoil";
import { IResultData } from "./ResultsSample";

export const result = atom<IResultData>({
  key: "result",
  default: springWarmData,
});
