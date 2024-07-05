/**
 * TopDownGamesPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-07-05
 * Description: Top-down Games Page
 */

import React from "react";
import { getLocalizedString } from "../../../utils/getLocalizedString.ts";

const TopDownGamesPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("TopDownGames.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("TopDownGames.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("TopDownGames.paragraphTwo")}
      </div>
    </div>
  );
};

export default TopDownGamesPage;
