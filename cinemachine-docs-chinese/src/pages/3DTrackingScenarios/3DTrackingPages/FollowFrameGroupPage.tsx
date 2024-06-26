/**
 * FollowFrameGroupPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-26
 * Description: Follow and frame a group Page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../utils/getLocalizedString.ts";
import { Image } from "antd";

const FollowFrameGroupPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("FollowFrameGroup.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FollowFrameGroup.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FollowFrameGroup.paragraphTwo")}
      </div>
      <div className="ContentPageSubtitle">
        {getLocalizedString("FollowFrameGroup.subtitleOne")}
      </div>
      <ul>
        {getLocalizedStringArray("FollowFrameGroup.ulListOne").map(
          (item, index) => (
            <li key={index}>
              <div className="ContentPageParagraph">{item}</div>
            </li>
          )
        )}
      </ul>
      <div className="ContentPageSubtitle">
        {getLocalizedString("FollowFrameGroup.subtitleTwo")}
      </div>
      <ul>
        {getLocalizedStringArray("FollowFrameGroup.ulListTwo").map(
          (item, index) => (
            <li key={index}>
              <div className="ContentPageParagraph">{item}</div>
            </li>
          )
        )}
      </ul>
      <div className="ContentPageParagraph">
        {getLocalizedString("FollowFrameGroup.paragraphThree")}
      </div>
      <div className="ContentPageSubtitle">
        {getLocalizedString("FollowFrameGroup.subTitleThree")}
      </div>
      <ul>
        {getLocalizedStringArray("FollowFrameGroup.ulListThree").map(
          (item, index) => (
            <li key={index}>
              <div className="ContentPageParagraph">{item}</div>
            </li>
          )
        )}
      </ul>
      <div className="ContentPageSubtitle">
        {getLocalizedString("FollowFrameGroup.subtitleFour")}
      </div>
      <ol>
        {getLocalizedStringArray("FollowFrameGroup.olListOne").map(
          (item, index) => (
            <li key={index}>
              <div className="ContentPageParagraph">{item}</div>
            </li>
          )
        )}
      </ol>
      <Image
        src={require("../../../assets/images/followframegroupimage1.png")}
      />
    </div>
  );
};

export default FollowFrameGroupPage;
