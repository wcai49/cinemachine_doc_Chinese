/**
 * App.js
 *Author: Wenlei Cai
 *Date: 2024-04-24
 *Description: This is the main component of the application.
 */

import NavigationMenu from "./components/NavigationMenu.tsx";
import MainContentPage from "./pages/MainContentPage.tsx";
import "./App.css";
import "./styles/FlexStyles.css";

function App() {
  return (
    <div className="App">
      <div className="AppHeader"></div>
      <div className="AppBody">
        <NavigationMenu />
        <MainContentPage />
      </div>
    </div>
  );
}

export default App;
