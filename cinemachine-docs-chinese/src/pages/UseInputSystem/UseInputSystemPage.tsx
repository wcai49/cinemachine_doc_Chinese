/**
 * UseInputSystemPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-18
 * Description: UseInputSystem page
 */

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { getLocalizedString } from "../../utils/getLocalizedString.ts";
import { code } from "./CodeExample.ts";
import { Anchor } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";
const UseInputSystemPage: React.FC = () => {
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("UseInputSystem.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("UseInputSystem.paragraphOne")}
        </div>
        <div className="ContentPageSubtitle">
          {getLocalizedString("UseInputSystem.subtitleOne")}
        </div>

        <div className="ContentPageParagraph">
          {getLocalizedString("UseInputSystem.paragraphTwo")}
          <CodeMirror
            value={code}
            theme={vscodeDark}
            extensions={[javascript({ jsx: true })]}
            width="800px"
          />
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("UseInputSystem.paragraphThree")}
        </div>
      </div>
      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>
        <Anchor
          style={{ width: "190px" }}
          items={getAnchorItems(["UseInputSystem.subtitleOne"])}
        />
      </div>
    </div>
  );
};

export default UseInputSystemPage;
