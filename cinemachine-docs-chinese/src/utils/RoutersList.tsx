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
import ManageGroupedCamerasPage from "../pages/ManageGroupedCameras/ManageGroupedCamerasPage.tsx";
import AvoidCollisionsAndEvaluateShotsPage from "../pages/AvoidCollisions/AvoidCollisionsAndEvaluateShots.tsx";
import CinemachineEventsPage from "../pages/CinemachineEvents/CinemachineEventsPage.tsx";
import CinemachineImpulsePage from "../pages/CinemachineImpulse/CinemachineImpulsePage.tsx";
import SplitScreenMultipleCamerasPage from "../pages/SplitScreen/SplitScreenMultipleCamerasPage.tsx";
import UseInputSystemPage from "../pages/UseInputSystem/UseInputSystemPage.tsx";
import KnownIssuesPage from "../pages/KnownIssues/KnownIssuesPage.tsx";

const RoutersList: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContentPage />} />
      <Route path="/cinemachine_doc_Chinese" element={<MainContentPage />} />
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

      {/* Section8 */}
      <Route
        path="section8-Manage-grouped-cameras"
        element={<ManageGroupedCamerasPage />}
      />

      {/* Section9 */}
      <Route
        path="section9-Avoid-collisions-and-evaluate-shots"
        element={<AvoidCollisionsAndEvaluateShotsPage />}
      />

      {/* Section10 */}
      <Route
        path="section10-Cinemachine-Events"
        element={<CinemachineEventsPage />}
      />

      {/* Section11 */}
      <Route
        path="section11-Cinemachine-Impulse"
        element={<CinemachineImpulsePage />}
      />

      {/* Section12 */}
      <Route
        path="section12-Split-screen-and-multiple-Unity-Cameras"
        element={<SplitScreenMultipleCamerasPage />}
      />

      {/* Section13 */}
      <Route
        path="section13-Use-Input-System-with-Cinemachine"
        element={<UseInputSystemPage />}
      />

      {/* Section16 */}
      <Route path="section16-Known-Issues" element={<KnownIssuesPage />} />
      {/* ComingSoon page for unknown path */}
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
};

export default RoutersList;
