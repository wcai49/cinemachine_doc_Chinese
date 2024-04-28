/**
 * App.js
 *Author: Wenlei Cai
 *Date: 2024-04-24
 *Description: This is the main component of the application.
 */

import NavigationMenu from "./components/Navigation/NavigationMenu.tsx";
import "./App.css";
import "./styles/FlexStyles.css";
import "./styles/ContentPagesStyles.css";
import { useNavigate } from "react-router-dom";
import RoutersList from "./utils/RoutersList.tsx";

function App() {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };
  return (
    <div className="App">
      <div className="AppHeader"></div>
      <div className="AppBody">
        <NavigationMenu navigateClick={(e) => navigateToPage(e)} />
        {RoutersList()}
      </div>
    </div>
  );
}

export default App;
