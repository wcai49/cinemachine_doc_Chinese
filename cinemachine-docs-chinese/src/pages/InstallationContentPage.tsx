/**
 * InstallationContentPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-29
 * Description: Installation and upgrade page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../utils/getLocalizedString.ts";
import { Image } from "antd";

const InstallationContentPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("InstallationAndUpgrade.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("InstallationAndUpgrade.installationParagraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("InstallationAndUpgrade.installationParagraphTwo")}
      </div>
      <Image src={require("../assets/images/InstallationImage.png")} />

      <div className="ContentPageTitle">
        {getLocalizedString("InstallationAndUpgrade.requirementsTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("InstallationAndUpgrade.requirementsParagraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("InstallationAndUpgrade.requirementsParagraphTwo")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString(
          "InstallationAndUpgrade.requirementsParagraphThree"
        )}
      </div>
      <ul className="ContentPageParagraph">
        <li key="requirementVersion">
          {getLocalizedString("InstallationAndUpgrade.requirementVersion")}
        </li>
      </ul>

      <div className="ContentPageTitle">
        {getLocalizedString("InstallationAndUpgrade.upgradingTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("InstallationAndUpgrade.upgradingParagraphOne")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("InstallationAndUpgrade.upgradingParagraphTwo")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("InstallationAndUpgrade.upgradingParagraphThree")}
      </div>

      <div className="ContentPageTitle">
        {getLocalizedString("InstallationAndUpgrade.upgradingFromOldTitle")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString(
          "InstallationAndUpgrade.upgradingFromOldParagraphOne"
        )}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString(
          "InstallationAndUpgrade.upgradingFromOldParagraphTwo"
        )}
      </div>
      <div className="ContentPageParagraph">
        <ol>
          {getLocalizedStringArray(
            "InstallationAndUpgrade.upgradingFromOldSteps"
          ).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

// "upgradingTitle": "从以前的Cinemachine版本升级"
// "upgradingTitle.comment": "Upgrading title"
// "upgradingParagraphOne": "Cinemachine 3.0是从CM 2.X到主要版本更改，API和数据格式已经发生了重大变化。针对CM 2.X API编写的脚本很可能无法在3.X上运行，除非进行手动干预。此外，项目中的CM摄像机实例本身也需要升级。"
// "upgradingParagraphOne.comment": "Upgrading paragraph one"
// "upgradingParagraphTwo": "虽然有可能从CM 2.X升级现有项目，但您应该仔细考虑是否愿意付出努力。在许多情况下，最好还是继续使用CM 2.X，在CM 3.X并行支持一段时间后继续支持。如果您选择升级项目，请参阅升级指南。"
// "upgradingParagraphTwo.comment": "Upgrading paragraph two"
// "upgradingParagraphThree": "Cinemachine 3.0以废弃形式继续支持已被新版本取代的过时CM2类。这是为了帮助您顺利过渡到新的API。然而，强烈建议您尽快将项目升级以使用新的API。废弃的类将在将来的版本中被移除。为了减少您的交付内容中的代码膨胀，您可以通过在项目的脚本定义符号中定义CINEMACHINE_NO_CM2_SUPPORT来立即删除废弃的类支持。"
// "upgradingParagraphThree.comment": "Upgrading paragraph three"
// "upgradingFromOldTitle": "从旧版Asset Store的Cinemachine升级"
// "upgradingFromOldTitle.comment": "Upgrading from old title"
// "upgradingFromOldParagraphOne": "如果您已经安装了Unity Asset Store中的一个非常旧版本的Cinemachine，那么您应该升级到Cinemachine Package。在这种情况下，建议您升级到Cinemachine 2.X，这在大多数情况下是完全自动的。"
// "upgradingFromOldParagraphOne.comment": "Upgrading from old paragraph one"
// "upgradingFromOldParagraphTwo": "要升级到Cinemachine Package："
// "upgradingFromOldParagraphTwo.comment": "Upgrading from old paragraph two"
// "upgradingFromOldSteps": [
//   "在Unity编辑器中，2019.4或更高版本，打开您的项目。"
//   "保存您正在工作的当前场景。"
//   "创建一个新的空场景。"
//   "在项目窗口中，删除Cinemachine资产和您可能安装的任何Cinemachine后期处理适配器资产。"
//   "安装Cinemachine 2.X包。"
// ],
// "upgradingFromOldSteps.comment": "Upgrading from old Asset stores steps"

export default InstallationContentPage;
