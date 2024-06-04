/**
 * CinemachineTimelinePage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-04
 * Description: Cinemachine and Timeline page
 */

import React from "react";
import { getLocalizedString } from "../../../../utils/getLocalizedString.ts";
import { Anchor, Image } from "antd";
import { getAnchorItems } from "../../../../utils/AnchorUtils.ts";
import { useLocation } from "react-router-dom";

const CinemachineTimelinePage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("CinemachineAndTimeline.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphTwo")}
        </div>

        {/* Live Cinemachine Camera selection */}
        <div
          id={`${location.pathname}#CinemachineAndTimeline.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("CinemachineAndTimeline.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphThree")}
        </div>

        {/* Cinemachine Track and Shot Clips */}
        <div
          id={`${location.pathname}#CinemachineAndTimeline.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("CinemachineAndTimeline.subtitleTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphFour")}
        </div>

        {/* Cinemachine Camera transitions */}
        <div
          id={`${location.pathname}#CinemachineAndTimeline.subtitleThree`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("CinemachineAndTimeline.subtitleThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphSix")}
        </div>

        <Image
          src={require("../../../../assets/images/CinemachineTimelineImage1.png")}
        />
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphSeven")}
        </div>

        {/* Multiple Cinemachine Tracks */}
        <div
          id={`${location.pathname}#CinemachineAndTimeline.subtitleFour`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("CinemachineAndTimeline.subtitleFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphEight")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphNine")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphTen")}
        </div>

        {/* Blend with other Cinemachine Tracks and the Brain */}
        <div
          id={`${location.pathname}#CinemachineAndTimeline.subtitleFive`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("CinemachineAndTimeline.subtitleFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphEleven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineAndTimeline.paragraphTwelve")}
        </div>

        <Image
          src={require("../../../../assets/images/CinemachineTimelineImage2.png")}
        />

        {/* Additional Resources */}
        <div
          id={`${location.pathname}#CinemachineAndTimeline.subtitleSix`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("CinemachineAndTimeline.subtitleSix")}
        </div>
        <div className="ContentPageParagraph">
          <ul>
            <a href="#section3-3-Set-up-Timeline-with-Cinemachine-Cameras">
              {getLocalizedString("CinemachineAndTimeline.paragraphThirteen")}
            </a>
          </ul>
        </div>
      </div>
      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>
        <Anchor
          offsetTop={45}
          style={{ width: "300px" }}
          items={getAnchorItems(
            [
              "CinemachineAndTimeline.subtitleOne",
              "CinemachineAndTimeline.subtitleTwo",
              "CinemachineAndTimeline.subtitleThree",
              "CinemachineAndTimeline.subtitleFour",
              "CinemachineAndTimeline.subtitleFive",
              "CinemachineAndTimeline.subtitleSix",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default CinemachineTimelinePage;
