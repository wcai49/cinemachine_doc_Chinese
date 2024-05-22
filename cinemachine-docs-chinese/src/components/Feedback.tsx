/**
 * Feedback.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-23
 * Description: Feedback component
 */

import React, { useState } from "react";
import { Divider, Button, Drawer } from "antd";
import { getLocalizedString } from "../utils/getLocalizedString.ts";

const Feedback: React.FC = () => {
  const [openFeedback, setOpenFeedBack] = useState(false);

  const showDrawer = () => {
    setOpenFeedBack(true);
  };

  const onClose = () => {
    setOpenFeedBack(false);
  };

  return (
    <div className="FeedbackComponent">
      <Divider />
      <div className="ContentPageSubtitle">
        {getLocalizedString("Feedback.title")}
      </div>
      <div className="MarginLarge">
        <Button type="primary" onClick={showDrawer}>
          {getLocalizedString("Feedback.sendFeedback")}
        </Button>
      </div>
      <Drawer
        title={getLocalizedString("Feedback.title")}
        onClose={onClose}
        open={openFeedback}
        width={700}
      >
        <iframe
          title="Feedback Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf_fFpgV1Y3oLee5nMBIdjgMCc6_0lJonNHQtShYAGMVSnQQw/viewform?embedded=true"
          width="640"
          height="100%"
        >
          Loading…
        </iframe>
      </Drawer>
    </div>
  );
};

export default Feedback;
