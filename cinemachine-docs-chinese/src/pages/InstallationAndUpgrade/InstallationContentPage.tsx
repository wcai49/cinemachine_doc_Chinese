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
import { useLocation } from "react-router-dom";

const InstallationContentPage: React.FC = () => {
  const location = useLocation();
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div
          id={`${location.pathname}#InstallationAndUpgrade.title`}
          className="ContentPageTitle"
        >
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
          id={`${location.pathname}#InstallationAndUpgrade.requirementsTitle`}
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
          id={`${location.pathname}#InstallationAndUpgrade.upgradingTitle`}
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
          id={`${location.pathname}#InstallationAndUpgrade.upgradingFromOldTitle`}
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
          offsetTop={45}
          style={{ width: "190px" }}
          items={getAnchorItems(
            [
              "InstallationAndUpgrade.title",
              "InstallationAndUpgrade.requirementsTitle",
              "InstallationAndUpgrade.upgradingTitle",
              "InstallationAndUpgrade.upgradingFromOldTitle",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default InstallationContentPage;
