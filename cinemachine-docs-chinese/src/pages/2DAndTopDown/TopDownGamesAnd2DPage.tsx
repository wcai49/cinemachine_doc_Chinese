/**
 * TopDownGamesAnd2DPages.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-11
 * Description: TopDownGamesAnd2D page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";

const keys = [
  "section5-1-Cinemachine-and-2D-graphics",
  "section5-2-Cinemachine-and-top-down-games",
];

const TopDownGamesAnd2DPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("TopDownGamesAnd2DPage.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("TopDownGamesAnd2DPage.paragraphOne")}
      </div>

      <ul>
        {getLocalizedStringArray("TopDownGamesAnd2DPage.list").map(
          (item, index) => {
            return (
              <li key={index}>
                <div className="ContentPageParagraph">
                  <a href={keys[index]}>{item}</a>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default TopDownGamesAnd2DPage;
