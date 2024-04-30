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
import GetStartedContentPage from "../pages/GetStarted/GetStartedContentpage.tsx";
import ComingSoonPage from "../pages/ComingSoonPage.tsx";
import TrackingScenario3DPage from "../pages/3DTrackingScenarios/TrackingScenario3DPage.tsx";

const RoutersList: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContentPage />} />
      <Route
        path="/section1-Cinemachine-package"
        element={<MainContentPage />}
      />
      {/* Section2 */}
      <Route
        path="/section2-Installation-and-upgrade"
        element={<InstallationPage />}
      />
      <Route
        path="/section2-1-Upgrading-from-Cinemachine-2.x"
        element={<UpgradeFrom2xPage />}
      />

      {/* Section3 */}
      <Route path="/section3-Get-started" element={<GetStartedContentPage />} />

      {/* Section4 */}
      <Route
        path="/section4-3D-tracking-scenarios"
        element={<TrackingScenario3DPage />}
      />

      {/* ComingSoon page for unknown path */}
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
};

export default RoutersList;
