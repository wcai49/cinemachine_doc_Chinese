/**
 * TrackingScenario3DPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-30
 * Description: 3D Tracking Scenarios page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";

const keys = [
  "section4-1-Follow-and-frame-a-character",
  "section4-2-Follow-and-frame-a-group",
  "section4-3-Create-a-FreeLook-Camera",
  "section4-4-Create-a-Third-Person-Camera",
];

const TrackingScenario3DPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("TrackingScenario3D.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("TrackingScenario3D.paragraphOne")}
      </div>

      <ul>
        {getLocalizedStringArray("TrackingScenario3D.list").map(
          (item, index) => {
            return (
              <li key={index}>
                <div className="ContentPageParagraph">
                  <a href={"#/" + keys[index]}>{item}</a>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default TrackingScenario3DPage;
