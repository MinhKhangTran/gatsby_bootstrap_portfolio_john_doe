import React from "react";
import "../styles/main.scss";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
