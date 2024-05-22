/**
 * App.js
 *Author: Wenlei Cai
 *Date: 2024-04-24
 *Description: This is the main component of the application.
 */

import { useState } from "react";
import NavigationMenu from "./components/Navigation/NavigationMenu.tsx";
import Footer from "./components/Footer.tsx";
import "./App.css";
import "./styles/FlexStyles.css";
import "./styles/ContentPagesStyles.css";
import "./styles/MarginsPaddings.css";
import "./styles/TextStyles.css";
import { useNavigate, useLocation } from "react-router-dom";
import RoutersList from "./utils/RoutersList.tsx";
import { Select } from "antd";
import { updateCurrentLanguage } from "./utils/getLocalizedString.ts";
import Feedback from "./components/Feedback.tsx";

function App() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("zh");
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.substring(1));

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    updateCurrentLanguage(newLanguage);
  };
  const navigateToPage = (path) => {
    navigate(path);
    setPath(path);
  };

  return (
    <div className="App">
      <div className="AppHeader">
        <div className="AppTitle">Cinemachine 3.1.0</div>
        <Select
          defaultValue="zh"
          onChange={handleLanguageChange}
          style={{ width: 120 }}
          options={[
            { value: "zh", label: <span>简体中文</span> },
            { value: "en", label: <span>English</span> },
          ]}
        />
      </div>
      <div className="AppBody">
        <NavigationMenu
          navigateClick={(e) => navigateToPage(e)}
          currentPath={path}
        />
        <div className="FlexCol">
          <div className="FlexOne">{RoutersList()}</div>
          <Feedback />
        </div>
      </div>
      <div className="AppFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
