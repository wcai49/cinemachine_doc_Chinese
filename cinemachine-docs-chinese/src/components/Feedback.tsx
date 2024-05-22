/**
 * Feedback.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-23
 * Description: Feedback component
 */

import React from "react";
import { Divider } from "antd";
import { getLocalizedString } from "../utils/getLocalizedString.ts";

const Feedback: React.FC = () => {
  return (
    <div className="FeedbackComponent">
      <Divider />
      <div className="ContentPageSubtitle">
        {getLocalizedString("Feedback.title")}
      </div>
      <iframe
        title="Feedback Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSf_fFpgV1Y3oLee5nMBIdjgMCc6_0lJonNHQtShYAGMVSnQQw/viewform?embedded=true"
        width="640"
        height="480"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Feedback;
