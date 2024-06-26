/**
 * CreateThirdPersonCameraPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-26
 * Description: Third Person Camera Page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../utils/getLocalizedString.ts";

const CreateThirdPersonCameraPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("ThirdPersonCamera.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ThirdPersonCamera.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ThirdPersonCamera.paragraphTwo")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ThirdPersonCamera.paragraphThree")}
      </div>
      <ul>
        {getLocalizedStringArray("ThirdPersonCamera.ulListOne").map(
          (item, index) => (
            <li key={index}>
              <div className="ContentPageParagraph">{item}</div>
            </li>
          )
        )}
      </ul>
      <div className="ContentPageParagraph">
        {getLocalizedString("ThirdPersonCamera.paragraphFour")}
      </div>
    </div>
  );
};

export default CreateThirdPersonCameraPage;
