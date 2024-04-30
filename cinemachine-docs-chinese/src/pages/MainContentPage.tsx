/**
 * MainContentPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-24
 * Description: MainContentPage component for the application
 */

import React from "react";
import { getLocalizedString } from "../utils/getLocalizedString.ts";
import { Anchor, Image } from "antd";
import { getAnchorItems } from "../utils/AnchorUtils.ts";

const MainContentPage: React.FC = () => {
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("CinemachinePackage.title")}
        </div>
        <Image src={require("../assets/images/CinemachineSplash.png")} />
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachinePackage.descriptionParagraphOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachinePackage.descriptionParagraphTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachinePackage.descriptioParagraphThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachinePackage.descriptionParagraphFour")}
        </div>
      </div>

      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>
        <Anchor className="MarginMedium" items={getAnchorItems([])} />
      </div>
    </div>
  );
};

export default MainContentPage;
