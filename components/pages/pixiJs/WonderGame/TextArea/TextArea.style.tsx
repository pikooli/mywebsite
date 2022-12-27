import { CSSProperties } from "react";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils";

const ONE_THIRD_MAP = MAP_HEIGHT / 3;

export const styleContainer: CSSProperties = {
  position: "absolute",
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "white",
  zIndex: 10,
  lineHeight: "1rem",
  padding: "8px",
};

export const styleName: CSSProperties = {
  color: "yellow",
};

export const styleText: CSSProperties = {
  lineBreak: "anywhere",
  overflow: "hidden",
  width: MAP_WIDTH - 16,
  height: ONE_THIRD_MAP,
};
