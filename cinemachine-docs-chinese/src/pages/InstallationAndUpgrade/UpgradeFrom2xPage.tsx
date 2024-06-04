/**
 * UpgradeFrom2xPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-30
 * Description: Installation and upgrade page for upgrading from 2.x
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";
import { Image, Anchor } from "antd";
import { getAnchorItems } from "../../utils/AnchorUtils.ts";
import { useLocation } from "react-router-dom";

const UpgradeFrom2xPage: React.FC = () => {
  const location = useLocation();
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        {/* Upgrading a Project from Cinemachine 2.X */}
        <div className="ContentPageTitle">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingProjectFromCinemachine2XTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingProjectFromCinemachine2XParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingProjectFromCinemachine2XParagraphTwo"
          )}
        </div>

        {/* Upgrading your project step by step */}
        <div
          className="ContentPageSubtitle"
          id={`${location.pathname}#UpgradingProjectFromCinemachine2X.UpgradingYourProjectStepByStepTitle`}
        >
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingYourProjectStepByStepTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingYourProjectStepByStepParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          <ol>
            {getLocalizedStringArray(
              "UpgradingProjectFromCinemachine2X.UpgradingYourProjectStepByStepList"
            ).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingYourProjectStepByStepParagraphTwo"
          )}
        </div>
        <Image src={require("../../assets/images/UpgradingFrom2x.png")} />

        {/* What has Changed in the API */}
        <div
          className="ContentPageSubtitle"
          id={`${location.pathname}#UpgradingProjectFromCinemachine2X.WhatHasChangedInTheAPITitle`}
        >
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.WhatHasChangedInTheAPITitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.WhatHasChangedInTheAPIParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.WhatHasChangedInTheAPIParagraphTwo"
          )}
        </div>

        {/* New Namespaces */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewNamespacesTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewNamespacesParagraphOne"
          )}
        </div>
        <ul className="ContentPageParagraph">
          {getLocalizedStringArray(
            "UpgradingProjectFromCinemachine2X.NewNamespacesList"
          ).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* New Components with Clearer Names */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewComponentsWithClearerNamesTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewComponentsWithClearerNamesParagraphOne"
          )}
        </div>
        <ul className="ContentPageParagraph">
          {getLocalizedStringArray(
            "UpgradingProjectFromCinemachine2X.NewComponentsWithClearerNamesList"
          ).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Renamed Components */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.RenamedComponentsTitle"
          )}
        </div>
        <ul className="ContentPageParagraph">
          {getLocalizedStringArray(
            "UpgradingProjectFromCinemachine2X.RenamedComponentsList"
          ).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Renamed Fields */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.RenamedFieldsTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.RenamedFieldsParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.RenamedFieldsParagraphTwo"
          )}
        </div>

        {/* Cleaner Object Structure, No Hidden GameObjects */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.CleanerObjectStructureNoHiddenGameObjectsTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.CleanerObjectStructureNoHiddenGameObjectsParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.CleanerObjectStructureNoHiddenGameObjectsParagraphTwo"
          )}
        </div>

        {/*  New Input Handling*/}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewInputHandlingTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewInputHandlingParagraphOne"
          )}
        </div>

        {/* New Events Architecture */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewEventsArchitectureTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewEventsArchitectureParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewEventsArchitectureParagraphTwo"
          )}
        </div>

        {/* New Spline Implementation */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewSplineImplementationTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.NewSplineImplementationParagraphOne"
          )}
        </div>

        {/* Decoupled from Unity Layers */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.DecoupledFromUnityLayersTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.DecoupledFromUnityLayersParagraphOne"
          )}
        </div>

        <Image src={require("../../assets/images/UpgradingFrom2x1.png")} />
        <br></br>
        <Image src={require("../../assets/images/UpgradingFrom2x2.png")} />

        {/* Lens Mode Override */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.LensModeOverrideTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.LensModeOverrideParagraphOne"
          )}
        </div>

        <Image src={require("../../assets/images/UpgradingFrom2x3.png")} />

        {/* Upgrading the Project Data */}
        <div
          className="ContentPageSubtitle"
          id={`${location.pathname}#UpgradingProjectFromCinemachine2X.UpgradingTheProjectDataTitle`}
        >
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingTheProjectDataTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingTheProjectDataParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingTheProjectDataParagraphTwo"
          )}
        </div>
        <Image src={require("../../assets/images/UpgradingFrom2x4.png")} />
        <br></br>
        <Image src={require("../../assets/images/UpgradingFrom2x5.png")} />

        {/* Upgrading a Single Object */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingASingleObjectTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingASingleObjectParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingASingleObjectParagraphTwo"
          )}
        </div>

        {/* Upgrading a Single Scene */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingASingleSceneTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingASingleSceneParagraphOne"
          )}
        </div>

        {/* Upgrading the Whole Project */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingTheWholeProjectTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingProjectFromCinemachine2X.UpgradingTheWholeProjectParagraphOne"
          )}
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
              "UpgradingProjectFromCinemachine2X.UpgradingYourProjectStepByStepTitle",
              "UpgradingProjectFromCinemachine2X.WhatHasChangedInTheAPITitle",
              "UpgradingProjectFromCinemachine2X.UpgradingTheProjectDataTitle",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default UpgradeFrom2xPage;
