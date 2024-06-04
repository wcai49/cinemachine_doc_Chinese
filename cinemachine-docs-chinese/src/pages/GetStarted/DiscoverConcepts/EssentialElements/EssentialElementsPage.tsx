/**
 * EssentialElementsPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-03
 * Description: EssentialElementsPage under DiscoverConcepts page
 */

import React from "react";
import { Image, Anchor } from "antd";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../../utils/getLocalizedString.ts";
import { getAnchorItems } from "../../../../utils/AnchorUtils.ts";
import Note from "../../../../components/Note.tsx";
import { useLocation } from "react-router-dom";

const EssentialElementsPage: React.FC = () => {
  const location = useLocation();
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("EssentialElements.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphOne")}
        </div>

        {/* Overview */}
        <div
          id={`${location.pathname}#EssentialElements.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("EssentialElements.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphTwo")}
          <ul>
            {getLocalizedStringArray("EssentialElements.listOne").map(
              (item, index) => {
                return (
                  <li key={index}>
                    <div className="ContentPageParagraph">{item}</div>
                  </li>
                );
              }
            )}
          </ul>
          <Image
            src={require("../../../../assets/images/essentialElementsImage1.png")}
          />
          <div className="ContentPageParagraph">
            {getLocalizedString("EssentialElements.paragraphThree")}
          </div>
        </div>
        {/* Unity Camera */}
        <div
          id={`${location.pathname}#EssentialElements.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("EssentialElements.subtitleTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphFive")}
        </div>

        {/* Cinemachine Brain */}
        <div
          id={`${location.pathname}#EssentialElements.subtitleThree`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("EssentialElements.subtitleThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphSix")}
          <ul>
            {getLocalizedStringArray("EssentialElements.listTwo").map(
              (item, index) => {
                return (
                  <li key={index}>
                    <div className="ContentPageParagraph">{item}</div>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <Note notes={[getLocalizedString("EssentialElements.noteOne")]} />

        {/* Cinemachine camera */}
        <div
          id={`${location.pathname}#EssentialElements.subtitleFour`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("EssentialElements.subtitleFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphSeven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphEight")}
        </div>
        <ul>
          {getLocalizedStringArray("EssentialElements.listThree").map(
            (item, index) => {
              return (
                <li key={index}>
                  <div className="ContentPageParagraph">{item}</div>
                </li>
              );
            }
          )}
        </ul>

        {/* Cinemachine camera game object */}
        <div className="ContentPageSubtitle">
          {getLocalizedString("EssentialElements.subtitleFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphNine")}
        </div>
        <ul>
          {getLocalizedStringArray("EssentialElements.listFour").map(
            (item, index) => {
              return (
                <li key={index}>
                  <div className="ContentPageParagraph">{item}</div>
                </li>
              );
            }
          )}
        </ul>
        <Image
          src={require("../../../../assets/images/essentialElementsImage2.png")}
        />
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphTen")}
        </div>

        {/* Single or multiple camera */}
        <div className="ContentPageSubtitle">
          {getLocalizedString("EssentialElements.subtitleSix")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphEleven")}
        </div>
        <ul>
          {getLocalizedStringArray("EssentialElements.listFive").map(
            (item, index) => {
              return (
                <li key={index}>
                  <div className="ContentPageParagraph">{item}</div>
                </li>
              );
            }
          )}
        </ul>

        {/* Power consumption */}
        <div className="ContentPageSubtitle">
          {getLocalizedString("EssentialElements.subtitleSeven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("EssentialElements.paragraphTwelve")}
        </div>

        {/* Additional resources */}
        <div
          id={`${location.pathname}#EssentialElements.subtitleEight`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("EssentialElements.subtitleEight")}
        </div>
        <div className="ContentPageParagraph">
          <ul>
            <li>
              <a href="#/section3-2-Set-up-a-basic-Cinemachine-environment">
                {getLocalizedString("EssentialElements.paragraphThirteen")}
              </a>
            </li>
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
              "EssentialElements.subtitleOne",
              "EssentialElements.subtitleTwo",
              "EssentialElements.subtitleThree",
              "EssentialElements.subtitleFour",
              "EssentialElements.subtitleEight",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default EssentialElementsPage;
