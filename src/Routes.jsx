import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MainDashboard from "pages/MainDashboard";
import SettingEditProfile from "pages/SettingEditProfile";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <MainDashboard />,
    },
        {
          path: "settingeditprofile",
          element: <SettingEditProfile />,
        },
      ]);
  return element;
};

export default ProjectRoutes;
