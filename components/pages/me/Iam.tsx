import React, { useState, useEffect } from "react";

type Props = {};

const ADJECTIVE = ["Full-stack developer", "Web developer", "Mobile developer"];
const PAUSE = 5;

const Iam: React.FC<Props> = () => {
  const [adjective, setAdjective] = useState("");
  const [index, setIndex] = useState(0);
  const [i, setI] = useState(0);

  const switchAdjective = () => {
    if (adjective.length < ADJECTIVE[index].length) {
      return setAdjective(ADJECTIVE[index].substring(0, adjective.length + 1));
    }
    if (i < PAUSE) {
      return setI((prev) => prev + 1);
    }
    setAdjective("");
    setI(0);
    switch (index) {
      case 0:
        setIndex(1);
        break;
      case 1:
        setIndex(2);
        break;
      case 2:
        setIndex(0);
        break;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => switchAdjective(), 200);
    return () => clearTimeout(timer);
  });

  return <h1>I am a {adjective}</h1>;
};

export default Iam;
