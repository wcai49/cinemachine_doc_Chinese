/**
 * AvoidCollisionsAndEvaluateShotsPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-15
 * Description: AvoidCollisionsAndEvaluateShots page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";

const keys = [
  "section15-Reference",
  "section15-Reference",
  "section15-Reference",
  "section15-Reference",
];

const AvoidCollisionsAndEvaluateShotsPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("AvoidCollisionsAndEvaluateShots.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("AvoidCollisionsAndEvaluateShots.paragraphOne")}
      </div>
      <ul>
        {getLocalizedStringArray(
          "AvoidCollisionsAndEvaluateShots.paragraphOneList"
        ).map((item, index) => {
          return (
            <div className="ContentPageParagraph">
              <a href={keys[index]}>{item}</a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AvoidCollisionsAndEvaluateShotsPage;
