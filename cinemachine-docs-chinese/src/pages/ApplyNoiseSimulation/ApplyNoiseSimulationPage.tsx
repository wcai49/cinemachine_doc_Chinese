/**
 * ApplyNoiseSimulationPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-11
 * Description: ApplyNoiseSimulation page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";

const ApplyNoiseSimulationPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("ApplyNoiseSimulationPage.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("ApplyNoiseSimulationPage.paragraphOne")}

        <ul>
          {getLocalizedStringArray(
            "ApplyNoiseSimulationPage.paragraphOneList"
          ).map((item, index) => {
            return (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="ContentPageParagraph">
        {getLocalizedString("ApplyNoiseSimulationPage.paragraphTwo")}
      </div>
    </div>
  );
};

export default ApplyNoiseSimulationPage;
