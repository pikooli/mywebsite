import React from "react";
import Drumkit from "components/pages/me/drumkit";

type Props = {};

const Me: React.FC<Props> = () => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        <img
          src="/pascal_zhang.jpg"
          className="rounded me-3"
          width={300}
          height={300}
          alt="pascal zhang"
        />
        <p>
          Who i am ? a vampire ? a chinese guy ? a developper ? all this ?
          Maybeeeeee ???
        </p>
        <p>This webside is still ongoing :D</p>
      </div>
      <Drumkit />
    </div>
  );
};

export default Me;
