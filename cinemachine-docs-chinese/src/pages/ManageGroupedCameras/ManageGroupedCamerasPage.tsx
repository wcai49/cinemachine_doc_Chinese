/**
 * ManageGroupedCamerasPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-12
 * Description: ManageGroupedCameras page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";
import { Anchor } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";

const ManageGroupedCamerasPage: React.FC = () => {
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("ManageGroupedCameras.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphTwo")}
        </div>
        <ul>
          {getLocalizedStringArray("ManageGroupedCameras.paragraphTwoList").map(
            (item, index) => {
              return (
                <li key={index}>
                  <div className="ContentPageParagraph">{item}</div>
                </li>
              );
            }
          )}
        </ul>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphThree")}
        </div>
        <div className="ContentPageSubtitle">
          {getLocalizedString("ManageGroupedCameras.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphSix")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphSeven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphEight")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphNine")}
        </div>
        <div className="ContentPageSubtitle">
          {getLocalizedString("ManageGroupedCameras.subtitleTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ManageGroupedCameras.paragraphTen")}
        </div>
      </div>

      <div className="MarginMedium">
        {getLocalizedString("Common.InThisArticle")}
      </div>
      <Anchor
        style={{ width: "190px" }}
        items={getAnchorItems([
          "ManageGroupedCameras.title",
          "ManageGroupedCameras.subtitleOne",
          "ManageGroupedCameras.subtitleTwo",
        ])}
      />
    </div>
  );
};

export default ManageGroupedCamerasPage;
