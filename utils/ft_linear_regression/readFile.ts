import fs from "fs";

//
export function transformContent(content: (string | number)[][]) {
  for (let j = 0; j < content.length; j++) {
    const values = content[j];
    for (let i = 1; i < values.length; i++) {
      content[j][i] = Number(values[i]);
    }
  }
  return content;
}

const errorMsg = (i: number) => `Error : not good value in file line ${i + 1}`;

const isNumeric = (value: string) => {
  return /^-?\d+$/.test(value);
};

//
export function checkContent(content?: string[][]) {
  if (!content) return `not good value in file`;
  for (let i = 0; i < content.length; i++) {
    const values = content[i];
    for (let j = 0; j < values.length; j++) {
      if (!values[j]) {
        return errorMsg(j);
      }
      if (j !== 0) {
        if (!isNumeric(values[j])) {
          return errorMsg(j);
        }
      }
    }
  }
  return transformContent(content);
}

//
export function parseContent(content?: string) {
  if (!content) return;
  const contentSplit = content
    .split(/\n/)
    .map((e) => e.split(",").map((e) => e.trim()));
  const nb_elements = contentSplit[0].length;
  const result = [];
  for (let i = 0; i < contentSplit.length; i++) {
    for (let j = 0; j < nb_elements; j++) {
      if (result[j]) result[j].push(contentSplit[i][j]);
      else result[j] = [contentSplit[i][j]];
    }
  }
  return checkContent(result);
}

//
export default function readFile(path?: string) {
  if (!path) return;
  return parseContent(fs.readFileSync(path, "utf8"));
}
