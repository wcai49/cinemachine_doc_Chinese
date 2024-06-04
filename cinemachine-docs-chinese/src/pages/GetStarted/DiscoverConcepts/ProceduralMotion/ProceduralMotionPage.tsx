/**
 * ProceduralMotionPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-04
 * Description: Procedural Motion page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../../utils/getLocalizedString.ts";
import { Anchor } from "antd";
import { getAnchorItems } from "../../../../utils/AnchorUtils.ts";
import { useLocation } from "react-router-dom";
import Note from "../../../../components/Note.tsx";

const ProceduralMotionPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("ProceduralMotion.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphOne")}
        </div>
        <ul>
          {getLocalizedStringArray("ProceduralMotion.listOne").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphTwo")}
        </div>

        {/* Procedural behaviors and extensions */}
        <div
          id={`${location.pathname}#ProceduralMotion.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ProceduralMotion.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphThree")}
        </div>

        {/* Position and Rotation Control */}
        <div className="ContentPageSubsubtitle">
          {getLocalizedString("ProceduralMotion.subtitleOneOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphSix")}
        </div>
        <ul>
          {getLocalizedStringArray("ProceduralMotion.listTwo").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>

        {/* Noise */}
        <div className="ContentPageSubsubtitle">
          {getLocalizedString("ProceduralMotion.subtitleOneTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphSeven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphEight")}
        </div>

        {/* Extensions */}
        <div className="ContentPageSubsubtitle">
          {getLocalizedString("ProceduralMotion.subtitleOneThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphNine")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphTen")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphEleven")}
        </div>
        <ul>
          {getLocalizedStringArray("ProceduralMotion.listThree").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>

        {/* Target GameObject tracking */}
        <div
          id={`${location.pathname}#ProceduralMotion.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ProceduralMotion.subtitleTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphTwelve")}
        </div>

        {/* Tracking Target and Look At Target properties */}
        <div className="ContentPageSubsubtitle">
          {getLocalizedString("ProceduralMotion.subtitleTwoOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphThirteen")}
        </div>
        <ul>
          {getLocalizedStringArray("ProceduralMotion.listFour").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>
        <Note notes={[getLocalizedString("ProceduralMotion.noteOne")]} />

        {/* Target tracking and blends */}
        <div className="ContentPageSubsubtitle">
          {getLocalizedString("ProceduralMotion.subtitleTwoTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphFourteen")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphFifteen")}
        </div>

        {/* Behavior and extension selection */}
        <div
          id={`${location.pathname}#ProceduralMotion.subtitleThree`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ProceduralMotion.subtitleThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphSixteen")}
        </div>
        <Note notes={[getLocalizedString("ProceduralMotion.noteTwo")]} />
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphSeventeen")}
        </div>

        {/* Custom behaviors and extensions */}
        <div className="ContentPageSubsubtitle">
          {getLocalizedString("ProceduralMotion.subtitleThreeOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ProceduralMotion.paragraphEighteen")}
        </div>

        {/* Additional resources */}
        <div
          id={`${location.pathname}#ProceduralMotion.subtitleFour`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ProceduralMotion.subtitleFour")}
        </div>
        <div className="ContentPageParagraph">
          <ul>
            <a href="#section3-3-Add-procedural-behavior-to-a-Cinemachine-Camera">
              {getLocalizedString("ProceduralMotion.paragraphNineteen")}
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
          style={{ width: "190px" }}
          items={getAnchorItems(
            [
              "ProceduralMotion.subtitleOne",
              "ProceduralMotion.subtitleTwo",
              "ProceduralMotion.subtitleThree",
              "ProceduralMotion.subtitleFour",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default ProceduralMotionPage;
