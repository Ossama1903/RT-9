import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Mainbar from "./MainBar/Mainbar";
import { useState } from "react";

const SideNavLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Mainbar handleDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default SideNavLayout;
