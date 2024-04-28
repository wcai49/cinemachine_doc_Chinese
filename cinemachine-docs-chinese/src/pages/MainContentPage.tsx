/**
 * MainContentPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-24
 * Description: MainContentPage component for the application
 */

import React from "react";
import { getLocalizedString } from "../utils/getLocalizedString.ts";
import { Image } from "antd";

const MainContentPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("CinemachinePackage.title", "zh")}
      </div>
      <Image src={require("../assets/images/CinemachineSplash.png")} />
      <div className="ContentPageParagraph">
        {getLocalizedString(
          "CinemachinePackage.descriptionFirstParagraph",
          "zh"
        )}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString(
          "CinemachinePackage.descriptionSecondParagraph",
          "zh"
        )}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString(
          "CinemachinePackage.descriptionThirdParagraph",
          "zh"
        )}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString(
          "CinemachinePackage.descriptionFourthParagraph",
          "zh"
        )}
      </div>
    </div>
  );
};

export default MainContentPage;
