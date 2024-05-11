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
import TopDownGamesAnd2DPage from "../pages/2DAndTopDown/TopDownGamesAnd2DPage.tsx";
import ConstrainCameraToPathPage from "../pages/ConstrainCameraToPath/ConstrainCameraToPathPage.tsx";
import ApplyNoiseSimulationPage from "../pages/ApplyNoiseSimulation/ApplyNoiseSimulationPage.tsx";

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

      {/* Section5 */}
      <Route
        path="/section5-2D-and-top-down-games"
        element={<TopDownGamesAnd2DPage />}
      />

      {/* Section6 */}
      <Route
        path="/section6-Constraint-a-camera-to-a-path"
        element={<ConstrainCameraToPathPage />}
      />

      {/* Section7 */}
      <Route
        path="section7-Apply-noise-to-simulate-camera-shake"
        element={<ApplyNoiseSimulationPage />}
      />

      {/* ComingSoon page for unknown path */}
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
};

export default RoutersList;
