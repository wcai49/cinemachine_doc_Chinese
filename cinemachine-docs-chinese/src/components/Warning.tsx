/**
 * Warning.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-04
 * description: Warning component to show warning messages.
 */

import React from "react";
import { getLocalizedString } from "../utils/getLocalizedString.ts";
import { WarningOutlined } from "@ant-design/icons";

interface WarningProps {
  warnings: string[];
}

const Warning: React.FC<WarningProps> = ({ warnings }) => {
  return (
    <div className="WarningContainer">
      <div className="WarningTitle">
        <WarningOutlined />
        {getLocalizedString("Common.Warning")}
      </div>

      <div className="WarningContent">
        {warnings.map((warning, index) => (
          <div key={index} className="WarningItem">
            {warning}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warning;
