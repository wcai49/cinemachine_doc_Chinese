/**
 * CinemachineEventsPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-15
 * Description: CinemachineEvents page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";

const CinemachineEventsPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("CinemachineEvents.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("CinemachineEvents.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("CinemachineEvents.paragraphTwo")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("CinemachineEvents.paragraphThree")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("CinemachineEvents.paragraphFour")}
      </div>
      <ul>
        {getLocalizedStringArray("CinemachineEvents.paragraphFourList").map(
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
  );
};

export default CinemachineEventsPage;
