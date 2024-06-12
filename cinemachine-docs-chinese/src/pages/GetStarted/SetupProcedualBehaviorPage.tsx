/**
 * SetupProceduralBehaviorPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-12
 * Description: Setup Procedural Behavior Page
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
import Warning from "../../components/Warning.tsx";

const SetupProceduralBehaviorPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("SetupProceduralBehavior.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphOne")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupProceduralBehavior.listOne").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ul>
        <Note
          notes={[getLocalizedString("SetupProceduralBehavior.noteOne")]}
          elements={[
            <div>
              <ul>
                {getLocalizedStringArray("SetupProceduralBehavior.listTwo").map(
                  (item, index) => (
                    <li key={index}>
                      <div>{item}</div>
                    </li>
                  )
                )}
              </ul>
            </div>,
          ]}
        />

        <div
          id={`${location.pathname}#SetupProceduralBehavior.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupProceduralBehavior.subtitleOne")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphTwo")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphThree")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphFour")}
          </li>
        </ol>
        <Note notes={[getLocalizedString("SetupProceduralBehavior.noteTwo")]} />
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphFive")}
        </div>
        <Warning
          warnings={[getLocalizedString("SetupProceduralBehavior.warningOne")]}
        />

        <div
          id={`${location.pathname}#SetupProceduralBehavior.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupProceduralBehavior.subtitleTwo")}
        </div>

        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphSix")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphSeven")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphEight")}
          </li>
        </ol>

        <div
          id={`${location.pathname}#SetupProceduralBehavior.subtitleThree`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupProceduralBehavior.subtitleThree")}
        </div>

        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphNine")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphTen")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphEleven")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphTwelve")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphThirteen")}
          </li>
        </ol>
        <Warning
          warnings={[getLocalizedString("SetupProceduralBehavior.warningTwo")]}
        />
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphFourteen")}
        </div>

        <div
          id={`${location.pathname}#SetupProceduralBehavior.subtitleFour`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupProceduralBehavior.subtitleFour")}
        </div>

        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphFifteen")}
        </div>
        <ol>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphSixteen")}
          </li>
          <li className="ContentPageParagraph">
            {getLocalizedString("SetupProceduralBehavior.paragraphSeventeen")}
          </li>
        </ol>
        <Note
          notes={[getLocalizedString("SetupProceduralBehavior.noteThree")]}
        />
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphEighteen")}
        </div>

        <div
          id={`${location.pathname}#SetupProceduralBehavior.subtitleFive`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("SetupProceduralBehavior.subtitleFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("SetupProceduralBehavior.paragraphNineteen")}
        </div>
        <ul>
          {getLocalizedStringArray("SetupProceduralBehavior.listThree").map(
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
              "SetupProceduralBehavior.subtitleOne",
              "SetupProceduralBehavior.subtitleTwo",
              "SetupProceduralBehavior.subtitleThree",
              "SetupProceduralBehavior.subtitleFour",
              "SetupProceduralBehavior.subtitleFive",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default SetupProceduralBehaviorPage;
