/**
 * KnownIssuesPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-18
 * Description: KnownIssues page
 */

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { getLocalizedString } from "../../utils/getLocalizedString.ts";
import { code } from "./CodeExample.ts";
import { Anchor } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";

const KnownIssuesPage: React.FC = () => {
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("KnownIssues.title")}
        </div>
        <div className="ContentPageSubtitle">
          {getLocalizedString("KnownIssues.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("KnownIssues.paragraphOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("KnownIssues.paragraphTwo")}
        </div>
        <CodeMirror
          value={code}
          theme={vscodeDark}
          extensions={[javascript({ jsx: true })]}
          width="800px"
        />
      </div>
      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>

        <Anchor
          style={{ width: "190px" }}
          items={getAnchorItems(["KnownIssues.subtitleOne"])}
        />
      </div>
    </div>
  );
};

export default KnownIssuesPage;
