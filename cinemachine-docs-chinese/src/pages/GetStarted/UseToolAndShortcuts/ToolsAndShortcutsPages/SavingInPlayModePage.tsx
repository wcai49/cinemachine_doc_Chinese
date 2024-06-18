/**
 * SavingInPlayModePage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-18
 * Description: Saving in Play Mode Page
 */

import React from "react";
import { getLocalizedString } from "../../../../utils/getLocalizedString.ts";

const SavingInPlayModePage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("SavingInPlayMode.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SavingInPlayMode.paragraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SavingInPlayMode.paragraphTwo")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SavingInPlayMode.paragraphThree")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SavingInPlayMode.paragraphFour")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("SavingInPlayMode.paragraphFive")}
      </div>
    </div>
  );
};

export default SavingInPlayModePage;
