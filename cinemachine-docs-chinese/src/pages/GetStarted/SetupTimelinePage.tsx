/**
 * SetupTimelinePage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-12
 * Description: Setup Timeline Page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";
import { Anchor, Image } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";
import { useLocation } from "react-router-dom";
import Note from "../../components/Note.tsx";

const SetupTimelinePage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("SetupTimeline.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupTimeline.paragraphOne")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupTimeline.listOne").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>

        <div
          id={`${location.pathname}#SetupTimeline.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupTimeline.subtitleOne")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphTwo")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphThree")}
          </li>
        </ol>

        <div
          id={`${location.pathname}#SetupTimeline.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupTimeline.subtitleTwo")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphFour")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphFive")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphSix")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphSeven")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphEight")}
          </li>
        </ol>

        <div
          id={`${location.pathname}#SetupTimeline.subtitleThree`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupTimeline.subtitleThree")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphNine")}
          </li>
          <Image
            src={require("../../assets/images/setup-timeline-camera-cut-image1.png")}
          />
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphTen")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphEleven")}
            <Note notes={[getLocalizedString("SetupTimeline.noteOne")]} />
          </li>

          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphTwelve")}
          </li>
        </ol>

        <div
          id={`${location.pathname}#SetupTimeline.subtitleFour`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupTimeline.subtitleFour")}
        </div>

        <div className="ContentPageParagraph">
          {getLocalizedString("SetupTimeline.paragraphThirteen")}
        </div>
        <ul>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphFourteen")}
          </li>
        </ul>

        <Image
          src={require("../../assets/images/setup-timeline-camera-cut-image2.png")}
        />

        <div
          id={`${location.pathname}#SetupTimeline.subtitleFive`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupTimeline.subtitleFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupTimeline.paragraphFifteen")}
        </div>
        <ul>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupTimeline.paragraphSixteen")}
          </li>
        </ul>

        <Image
          src={require("../../assets/images/setup-timeline-camera-cut-image3.png")}
        />

        <div className="ContentPageParagraph">
          {getLocalizedString("SetupTimeline.paragraphSeventeen")}
        </div>
      </div>
      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>
        <Anchor
          offsetTop={45}
          style={{ width: "190px" }}
          items={getAnchorItems(
            [
              "SetupTimeline.subtitleOne",
              "SetupTimeline.subtitleTwo",
              "SetupTimeline.subtitleThree",
              "SetupTimeline.subtitleFour",
              "SetupTimeline.subtitleFive",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default SetupTimelinePage;
