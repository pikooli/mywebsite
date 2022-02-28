import React, { useState, useEffect } from "react";
import pause from "utils/pause";

type Props = {};

const ADJECTIVE = ["Full-stack developer", "Web developer", "Mobile developer"];

const Iam: React.FC<Props> = () => {
  const [adjective, setAdjective] = useState("");
  const [index, setIndex] = useState(0);

  const switchAdjective = async () => {
    if (adjective.length < ADJECTIVE[index].length) {
      return setAdjective(ADJECTIVE[index].substring(0, adjective.length + 1));
    }
    await pause(2);
    setAdjective("");
    setIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => switchAdjective(), 200);
    return () => clearTimeout(timer);
  });

  return <h1>I am a {adjective}</h1>;
};

export default Iam;
