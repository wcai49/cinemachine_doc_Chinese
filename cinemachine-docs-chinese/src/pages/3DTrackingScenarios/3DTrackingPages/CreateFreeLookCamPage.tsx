/**
 * FreeLookCameraPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-26
 * Description: Create a FreeLook Camera Page
 */

import React from "react";
import { getLocalizedString } from "../../../utils/getLocalizedString.ts";
import { Image } from "antd";

const FreeLookCameraPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("FreeLookCamera.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FreeLookCamera.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FreeLookCamera.paragraphTwo")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FreeLookCamera.paragraphThree")}
      </div>
      <Image src={require("../../../assets/images/freelookcamimage1.png")} />
      <div className="ContentPageParagraph">
        {getLocalizedString("FreeLookCamera.paragraphFour")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FreeLookCamera.paragraphFive")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FreeLookCamera.paragraphSix")}
      </div>
      <Image src={require("../../../assets/images/freelookcamimage2.png")} />
      <div className="ContentPageParagraph">
        {getLocalizedString("FreeLookCamera.paragraphSeven")}
      </div>
    </div>
  );
};

export default FreeLookCameraPage;
