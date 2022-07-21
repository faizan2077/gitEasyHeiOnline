import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

const SidebarHam = ({ sidebarMenu, setSidebarMenu, setHideShowSidebarHam }) => {
  const menuItemHandler = (index) => {
    const temp = sidebarMenu.map((item, i) =>
      i === index ? { ...item, active: true } : { ...item, active: false }
    );
    setSidebarMenu(temp);
  };
  const copyCodeHandler = () => {
    const code = document.querySelector(".sidebar__code");
    const codeCopyButton = document.querySelector(".sidebar__codeCopyBtn");

    navigator.clipboard.writeText(code.textContent);
    codeCopyButton.textContent = "Copied";

    setTimeout(() => {
      codeCopyButton.textContent = "Copy";
    }, 3000);
  };

  return (
    <div className="sidebarHam">
      <div className="sidebar__logoWrapper">
        <img
          src="/assets/images/brand-logo.png"
          alt="sidebar Background"
          className="sidebar__background"
        />
      </div>

      <ul className="sidebar__menuWrapper">
        {sidebarMenu.map((item, index) => (
          <Link
          key={index}
            to={`/teacher/${item.title.replace(/ /, "").toLowerCase()}`}
            className={
              item?.active
                ? `sidebar__menuItem sidebar__menuItemActive`
                : `sidebar__menuItem`
            }
            onClick={() => menuItemHandler(index)}
          >
            <img
              src={
                item?.active
                  ? `/assets/images/teacher-dashboard-sidebar-${item?.title?.toLowerCase()}-yellow.svg`
                  : `/assets/images/teacher-dashboard-sidebar-${item?.title?.toLowerCase()}.svg`
              }
              alt="Item Icon"
              className="sidebar__menuItemIcon"
            />
            <p className="sidebar__menuItemTitle">{item?.title}</p>
          </Link>
        ))}
      </ul>
     
    </div>
  );
};

export default SidebarHam;
