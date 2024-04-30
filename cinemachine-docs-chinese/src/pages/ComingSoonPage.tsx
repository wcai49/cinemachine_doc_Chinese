/**
 * ComingSoonPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-30
 * Description: ComingSoon page. If you see this page and would like to contribute, please submit by PR
 */

import React from "react";
import { getLocalizedString } from "../utils/getLocalizedString.ts";
import { Image } from "antd";

const ComingSoonPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("ComingSoom.title")}
      </div>
      <Image
        style={{ width: 400 }}
        src={require("../assets/images/working.png")}
      />
      <div className="ContentPageSubtitle">
        {getLocalizedString("ComingSoom.paragraphOne")}
      </div>
      <div className="ContentPageSubtitle">
        {getLocalizedString("ComingSoom.paragraphTwo")}
      </div>
    </div>
  );
};

export default ComingSoonPage;
