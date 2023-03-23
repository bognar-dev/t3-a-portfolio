import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<React.PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
