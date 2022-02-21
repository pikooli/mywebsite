import React, { useContext } from "react";
import Header from "components/Header";
import Navbar from "components/navbar/Navbar";
import SideBar from "components/navbar/SideBar";
import AppContext from "components/AppContext";

const Layout = ({
  children,
  title,
  className,
}: {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}) => {
  const value = useContext(AppContext);

  return (
    <div className={`${value?.theme} ${className || ""}`}>
      <Header title={`Pascal Zhang ${!title ? "" : `- ${title}`}`} />
      <main>
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <div className={`container mt-3`}>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
