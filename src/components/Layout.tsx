import React, { useContext } from 'react';
import Header from 'src/components/Header';
import Navbar from 'src/components/navbar/Navbar';
import SideBar from 'src/components/navbar/SideBar';
import AppContext from 'src/context/AppContext';

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
    <div className={`${value?.theme} ${className || ''}`}>
      <Header title={`Pascal Zhang ${!title ? '' : `- ${title}`}`} />
      <main>
        <Navbar />
        <div className="flex">
          <SideBar />
          <div className="container px-3 mt-3">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
