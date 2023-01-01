import react from "react";

export interface ContextValue {
  userName?: string;
  setUserName?: react.Dispatch<react.SetStateAction<string>>;
}
