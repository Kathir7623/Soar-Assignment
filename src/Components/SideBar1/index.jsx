import React from "react";
import { Img } from "./..";  // Ensure you update the path for Img component
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="252px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: "50px" } }}
      className={`${props.className} flex flex-col h-screen pt-[30px] gap-[50px] top-0 sm:pt-5 bg-white-a700 !sticky overflow-auto`}
    >
      {/* Sidebar Logo */}
      <Img
        src="images/img_sidebar_logo.png"
        alt="Logo"
        className="h-[40px] w-[160px] object-contain"
      />
      {/* Menu */}
      <Menu
        menuItemStyles={{
          button: {
            padding: "16px 16px 16px 38px",
            gap: "21px",
            color: "#888ea2",
            fontWeight: 500,
            fontSize: "18px",
            [`&:hover, &.ps-active`]: { color: "#314ca3" },
          },
        }}
        rootStyles={{ "& > ul": { gap: "1.50px" } }}
        className="mb-[334px] flex w-full flex-col self-stretch"
      >
        {/* Menu Items */}
        <MenuItem
          icon={<Img src="images/img_home.svg" alt="Home Icon" className="h-[24px] w-[24px]" />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_television.svg" alt="Transactions Icon" className="h-[24px] w-[24px]" />}
        >
          Transactions
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_user_3_1.svg" alt="Accounts Icon" className="h-[24px] w-[24px]" />}
        >
          Accounts
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_settings.svg" alt="Investments Icon" className="h-[24px] w-[24px]" />}
        >
          Investments
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_television_blue_gray_400.svg" alt="Credit Cards Icon" className="h-[24px] w-[24px]" />}
        >
          Credit Cards
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_profile.svg" alt="Loans Icon" className="h-[24px] w-[24px]" />}
        >
          Loans
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_service_1.svg" alt="Services Icon" className="h-[24px] w-[24px]" />}
        >
          Services
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_laptop.svg" alt="Privileges Icon" className="h-[24px] w-[24px]" />}
        >
          My Privileges
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_search.svg" alt="Settings Icon" className="h-[24px] w-[24px]" />}
        >
          Settings
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
