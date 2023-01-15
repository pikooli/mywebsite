import React from 'react';
import Image from 'next/image';
import Iam from 'src/pages/me/Iam';

type Props = {};

const Me: React.FC<Props> = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <Image
          src="/cat.png"
          className="rounded"
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
