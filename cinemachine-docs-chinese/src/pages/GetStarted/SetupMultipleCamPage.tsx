/**
 * SetupMultipleCamPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-12
 * Description: Setup Multiple Cameras Page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";
import { Anchor } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";
import { useLocation } from "react-router-dom";
import Note from "../../components/Note.tsx";

const SetupMultipleCamPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("SetupMultipleCam.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupMultipleCam.paragraphOne")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupMultipleCam.listOne").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>
        <Note notes={[getLocalizedString("SetupMultipleCam.noteOne")]} />

        <div
          id={`${location.pathname}#SetupMultipleCam.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupMultipleCam.subtitleOne")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphTwo")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphThree")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphFour")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphFive")}
          </li>
        </ol>

        <div
          id={`${location.pathname}#SetupMultipleCam.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupMultipleCam.subtitleTwo")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphSix")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphSeven")}
          </li>
          <ul>
            {getLocalizedStringArray("SetupMultipleCam.listTwo").map(
              (item, index) => (
                <li key={index}>
                  <div className="ContentPageParagraph">{item}</div>
                </li>
              )
            )}
          </ul>
        </ol>

        <div
          id={`${location.pathname}#SetupMultipleCam.subtitleThree`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupMultipleCam.subtitleThree")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphEight")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphNine")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupMultipleCam.paragraphTen")}
          </li>
        </ol>

        <div
          id={`${location.pathname}#SetupMultipleCam.subtitleFour`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupMultipleCam.subtitleFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupMultipleCam.paragraphEleven")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupMultipleCam.listThree").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>
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
              "SetupMultipleCam.subtitleOne",
              "SetupMultipleCam.subtitleTwo",
              "SetupMultipleCam.subtitleThree",
              "SetupMultipleCam.subtitleFour",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default SetupMultipleCamPage;
