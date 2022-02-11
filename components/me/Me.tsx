import React from "react";
import Image from "next/image";

type Props = {};

const Me: React.FC<Props> = () => {
  return (
    <div>
      <div className="d-flex">
        <Image
          src="/pascal_zhang.jpg"
          width={300}
          height={300}
          alt="pascal zhang"
          className="rounded me-3"
        />
        <p>
          Who i am ? a vampire ? a chinese guy ? a developper ? all this ?
          Maybeeeeee ???
        </p>
      </div>
    </div>
  );
};

export default Me;
