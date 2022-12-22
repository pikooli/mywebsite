import { CSSProperties } from "react";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils";

const ONE_THIRD_MAP = MAP_HEIGHT / 3;

export const style: CSSProperties = {
  position: "absolute",
  bottom: 0,
  width: MAP_WIDTH,
  height: ONE_THIRD_MAP,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "white",
  padding: "8px",
  zIndex: 1000,
};
