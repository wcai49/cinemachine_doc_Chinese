/**
 * App.js
 *Author: Wenlei Cai
 *Date: 2024-04-24
 *Description: This is the main component of the application.
 */

import { useState } from "react";
import NavigationMenu from "./components/Navigation/NavigationMenu.tsx";
import "./App.css";
import "./styles/FlexStyles.css";
import "./styles/ContentPagesStyles.css";
import { useNavigate } from "react-router-dom";
import RoutersList from "./utils/RoutersList.tsx";
import { Select } from "antd";
import { updateCurrentLanguage } from "./utils/getLocalizedString.ts";

function App() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("zh");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    updateCurrentLanguage(newLanguage);
  };
  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <div className="AppHeader">
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
        <NavigationMenu navigateClick={(e) => navigateToPage(e)} />
        {RoutersList(language)}
      </div>
    </div>
  );
}

export default App;
