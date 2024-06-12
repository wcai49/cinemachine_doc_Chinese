/**
 * SetupEnvironmentPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-12
 * Description: This file is the setup environment page of the Get Started section.
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

const SetupEnvironmentPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("SetupEnvironment.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphOne")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupEnvironment.listOne").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>
        <Note notes={[getLocalizedString("SetupEnvironment.noteOne")]} />

        <div
          id={`${location.pathname}#SetupEnvironment.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupEnvironment.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphThree")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupEnvironment.listTwo").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>

        <div
          id={`${location.pathname}#SetupEnvironment.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupEnvironment.subtitleTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphSix")}
        </div>
        <Note notes={[getLocalizedString("SetupEnvironment.noteTwo")]} />
        <Note notes={[getLocalizedString("SetupEnvironment.noteThree")]} />

        <div
          id={`${location.pathname}#SetupEnvironment.subtitleThree`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupEnvironment.subtitleThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphSeven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphEight")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphNine")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupEnvironment.listThree").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>
        <Note notes={[getLocalizedString("SetupEnvironment.noteFour")]} />

        <div
          id={`${location.pathname}#SetupEnvironment.subtitleFour`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupEnvironment.subtitleFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupEnvironment.paragraphTen")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupEnvironment.listFour").map(
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
              "SetupEnvironment.subtitleOne",
              "SetupEnvironment.subtitleTwo",
              "SetupEnvironment.subtitleThree",
              "SetupEnvironment.subtitleFour",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default SetupEnvironmentPage;
