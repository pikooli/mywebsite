import React from "react";
import Image from "next/image";
import Iam from "components/pages/me/Iam";

type Props = {};

const Me: React.FC<Props> = () => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        <Image
          src="/cat.png"
          className="rounded me-3"
          width={300}
          height={300}
          alt="cat"
        />
        <Iam />
      </div>
      <p>This webside is still ongoing :D</p>
    </div>
  );
};

export default Me;
