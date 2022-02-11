import React from "react";
import Header from "components/Header";
import Navbar from "components/Navbar";

const Layout = ({
  children,
  title,
  className,
}: {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Header title={`Pascal Zhang ${!title ? "" : `- ${title}`}`} />
      <main>
        <Navbar />
        <div className={`container mt-3`}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
