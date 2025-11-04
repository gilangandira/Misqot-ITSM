import React, { useState } from "react";
import "../../App.css";
import { SideBarData } from "./SideBarData";
import AppsIcon from "@mui/icons-material/Apps";
function SideBar() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <ul className="sidebar-list">
            <li className="row-company">
              {open && <div className="companies">Misqot Access</div>}
              <div className="appsIcon">
                {" "}
                <AppsIcon size={100} />
              </div>
            </li>
          </ul>
        </div>
        <ul className="sidebar-list">
          {SideBarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="icon">{val.icon}</div>
                {open && <div className="title">{val.title}</div>}
              </li>
            );
          })}
        </ul>
      </div>
      {/* optional overlay for mobile */}
      {!open && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default SideBar;
