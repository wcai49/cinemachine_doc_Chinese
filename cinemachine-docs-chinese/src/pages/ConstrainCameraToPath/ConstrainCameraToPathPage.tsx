/**
 * ConstrainCameraToPath.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-11
 * Description: ConstrainCameraToPath page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";
import { Image } from "antd";

const ConstrainCameraToPathPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("ConstrainCameraToPath.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ConstrainCameraToPath.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ConstrainCameraToPath.paragraphTwo")}
      </div>
      <Image src={require("../../assets/images/CinemachinePathScene.png")} />
      <div className="ContentPageParagraph">
        {getLocalizedString("ConstrainCameraToPath.paragraphThree")}

        <ul>
          {getLocalizedStringArray(
            "ConstrainCameraToPath.pargraphThreeList"
          ).map((item, index) => {
            return (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="ContentPageParagraph">
        {getLocalizedString("ConstrainCameraToPath.paragraphFour")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ConstrainCameraToPath.paragraphFive")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ConstrainCameraToPath.paragraphSix")}
      </div>
    </div>
  );
};

export default ConstrainCameraToPathPage;
