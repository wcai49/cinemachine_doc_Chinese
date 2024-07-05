/**
 * 2DGraphicsPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-07-05
 * Description: 2D Graphics Page
 */

import React from "react";
import { getLocalizedString } from "../../../utils/getLocalizedString.ts";

const Cinemachine2DGraphicsPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("2DGraphics.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("2DGraphics.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("2DGraphics.paragraphTwo")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("2DGraphics.paragraphThree")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("2DGraphics.paragraphFour")}
      </div>
    </div>
  );
};

export default Cinemachine2DGraphicsPage;
