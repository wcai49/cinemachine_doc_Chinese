/**
 * CinemachiineImpulsePage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-15
 * Description: CinemachineImpulse page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";
import { Anchor } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";

const CinemachineImpulsePage: React.FC = () => {
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("CinemachineImpulse.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineImpulse.paragraphOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineImpulse.paragraphTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineImpulse.paragraphThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineImpulse.paragraphFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineImpulse.paragraphFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineImpulse.paragraphSix")}
        </div>
        <div className="ContentPageSubtitle">
          {getLocalizedString("CinemachineImpulse.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("CinemachineImpulse.paragraphSeven")}
        </div>
        <ul>
          {getLocalizedStringArray("CinemachineImpulse.paragraphSevenList").map(
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
      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>
        <Anchor
          style={{ width: "190px" }}
          items={getAnchorItems(["CinemachineImpulse.subtitleOne"])}
        />
      </div>
    </div>
  );
};

export default CinemachineImpulsePage;
