/**
 * RoutersList.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-27
 * Description: RoutersList component for the application
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContentPage from "../pages/MainContentPage.tsx";
import InstallationPage from "../pages/InstallationAndUpgrade/InstallationContentPage.tsx";
import UpgradeFrom2xPage from "../pages/InstallationAndUpgrade/UpgradeFrom2xPage.tsx";

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
      <Route
        path="/section2-1-Upgrading-from-Cinemachine-2.x"
        element={<UpgradeFrom2xPage />}
      />
    </Routes>
  );
};

export default RoutersList;
