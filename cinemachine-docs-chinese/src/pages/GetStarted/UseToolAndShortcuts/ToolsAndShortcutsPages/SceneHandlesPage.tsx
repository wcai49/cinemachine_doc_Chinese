/**
 * SceneHandlesPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-18
 * Description: Scene Handles Page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../../utils/getLocalizedString.ts";
import { Image } from "antd";

const SceneHandlesPage: React.FC = () => {
  const fovList = getLocalizedStringArray("SceneHandles.fovList");

  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("SceneHandles.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphTwo")}
      </div>
      <Image
        src={require("../../../../assets/images/handleToolbar_image1.png")}
      />
      <div className="ContentPageSubtitle">
        {getLocalizedString("SceneHandles.handleToolsTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphThree")}
      </div>
      <Image
        src={require("../../../../assets/images/handleToolbar_image2.png")}
      />
      <div className="ContentPageSubtitle">
        {getLocalizedString("SceneHandles.fovTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.fovDescription")}
      </div>
      <ul>
        {fovList.map((item, index) => (
          <li key={index}>
            <div className="ContentPageParagraph">{item}</div>
          </li>
        ))}
      </ul>
      <Image
        src={require("../../../../assets/images/handleToolbar_image3.png")}
      />
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphFour")}
      </div>
      <div className="ContentPageSubtitle">
        {getLocalizedString("SceneHandles.clipPlanesTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphFive")}
      </div>
      <Image
        src={require("../../../../assets/images/handleToolbar_image4.png")}
      />
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphSix")}
      </div>
      <div className="ContentPageSubtitle">
        {getLocalizedString("SceneHandles.followOffsetTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphSeven")}
      </div>
      <Image
        src={require("../../../../assets/images/handleToolbar_image5.png")}
      />
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphEight")}
      </div>
      <div className="ContentPageSubtitle">
        {getLocalizedString("SceneHandles.trackedObjectOffsetTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphNine")}
      </div>
      <Image
        src={require("../../../../assets/images/handleToolbar_image6.png")}
      />
      <div className="ContentPageParagraph">
        {getLocalizedString("SceneHandles.paragraphTen")}
      </div>
    </div>
  );
};

export default SceneHandlesPage;
