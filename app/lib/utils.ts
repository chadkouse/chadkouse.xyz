import { ReactNode } from "react";
import { onlyText } from "react-children-utilities";

export function GetContentReadingTime(children:ReactNode|ReactNode[]):string {
  const text = onlyText(children);
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return `${time} min`;
}