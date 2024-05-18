/**
 * SplitScreenMultipleCamerasPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-15
 * Description: SplitScreenMultipleCameras page
 */

import React from "react";
import { getLocalizedString } from "../../utils/getLocalizedString.ts";
import { Image } from "antd";

const SplitScreenMultipleCamerasPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("SplitScreenMultipleCameras.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SplitScreenMultipleCameras.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SplitScreenMultipleCameras.paragraphTwo")}
      </div>
      <Image
        src={require("../../assets/images/CinemachineChannels-camera.png")}
      />
      <div className="ContentPageParagraph">
        {getLocalizedString("SplitScreenMultipleCameras.paragraphThree")}
      </div>
      <Image
        src={require("../../assets/images/CinemachineChannels-brain.png")}
      />
    </div>
  );
};

export default SplitScreenMultipleCamerasPage;
