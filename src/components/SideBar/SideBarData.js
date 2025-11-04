import React from "react";

import AddHomeIcon from "@mui/icons-material/AddHome";
import DatasetIcon from "@mui/icons-material/Dataset";
import ConstructionIcon from "@mui/icons-material/Construction";
import LogoutIcon from "@mui/icons-material/Logout";

export const SideBarData = [
  {
    title: "Home",
    icon: <AddHomeIcon />,
    link: "/home",
  },
  {
    title: "Assets",
    icon: <DatasetIcon />,
    link: "/Assets",
  },
  {
    title: "Tickets",
    icon: <ConstructionIcon />,
    link: "/Tickets",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/Logout",
  },
];
