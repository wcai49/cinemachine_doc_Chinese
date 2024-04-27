/**
 * RoutersList.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-27
 * Description: RoutersList component for the application
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContentPage from "../pages/MainContentPage.tsx";

function RoutersList() {
  return (
    <Routes>
      <Route path="/" element={<MainContentPage />} />
      <Route
        path="/section1-Cinemachine-package"
        element={<MainContentPage />}
      />
    </Routes>
  );
}

export default RoutersList;
