/**
 * Footer.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-30
 * Description: Footer component for the application
 */

import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="FooterText">
        本网站的英文内容由Unity
        Technologies提供；中文翻译由中文Unity游戏开发者提供。欢迎所有开发者前往
        <a
          style={{ color: "#ffffff" }}
          href="https://github.com/wcai49/cinemachine_doc_Chinese"
        >
          Github仓库地址
        </a>
        参与项目，提供改进建议。
      </div>

      <div className="FooterText">
        <span>
          The English content on this site is provided by Unity Technologies;
          The Chinese translation is provided by Chinese Unity game developers.
          The&nbsp;
        </span>
        <a
          style={{ color: "#ffffff" }}
          href="https://github.com/wcai49/cinemachine_doc_Chinese"
        >
          Github repository link
        </a>
        <span>
          &nbsp;welcomes all developers to participate in the project and
          provide improvement suggestions.
        </span>
      </div>

      <div className="FooterText">© Copyright 2024 Unity Technologies</div>
    </div>
  );
};

export default Footer;
