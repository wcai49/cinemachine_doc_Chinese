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
} from "../../utils/getLocalizedString.ts";
import { Anchor, Image } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";

const InstallationContentPage: React.FC = () => {
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle" id="InstallationAndUpgrade.title">
          {getLocalizedString("InstallationAndUpgrade.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "InstallationAndUpgrade.installationParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "InstallationAndUpgrade.installationParagraphTwo"
          )}
        </div>
        <Image src={require("../../assets/images/InstallationImage.png")} />

        <div
          className="ContentPageSubtitle"
          id="InstallationAndUpgrade.requirementsTitle"
        >
          {getLocalizedString("InstallationAndUpgrade.requirementsTitle")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "InstallationAndUpgrade.requirementsParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "InstallationAndUpgrade.requirementsParagraphTwo"
          )}
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

        <div
          className="ContentPageSubtitle"
          id="InstallationAndUpgrade.upgradingTitle"
        >
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

        <div
          className="ContentPageSubtitle"
          id="InstallationAndUpgrade.upgradingFromOldTitle"
        >
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

      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>
        <Anchor
          style={{ width: "190px" }}
          items={getAnchorItems([
            "InstallationAndUpgrade.title",
            "InstallationAndUpgrade.requirementsTitle",
            "InstallationAndUpgrade.upgradingTitle",
            "InstallationAndUpgrade.upgradingFromOldTitle",
          ])}
        />
      </div>
    </div>
  );
};

export default InstallationContentPage;
