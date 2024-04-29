/**
 * RoutersList.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-27
 * Description: RoutersList component for the application
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContentPage from "../pages/MainContentPage.tsx";
import InstallationPage from "../pages/InstallationContentPage.tsx";

const RoutersList: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContentPage />} />
      <Route
        path="/section1-Cinemachine-package"
        element={<MainContentPage />}
      />
      <Route
        path="/section2-Installation-and-upgrade"
        element={<InstallationPage />}
      />
    </Routes>
  );
};

export default RoutersList;
