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

const UpgradeFrom2xPage: React.FC = () => {
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        {/* Upgrading a Project from Cinemachine 2.X */}
        <div className="ContentPageTitle" id="InThisArticle">
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
          id="UpgradingYourProjectStepByStep.UpgradingYourProjectStepByStepTitle"
        >
          {getLocalizedString(
            "UpgradingYourProjectStepByStep.UpgradingYourProjectStepByStepTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingYourProjectStepByStep.UpgradingYourProjectStepByStepParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          <ol>
            {getLocalizedStringArray(
              "UpgradingYourProjectStepByStep.UpgradingYourProjectStepByStepList"
            ).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingYourProjectStepByStep.UpgradingYourProjectStepByStepParagraphTwo"
          )}
        </div>
        <Image src={require("../../assets/images/UpgradingFrom2x.png")} />

        {/* What has Changed in the API */}
        <div
          className="ContentPageSubtitle"
          id="WhatHasChangedInTheAPI.WhatHasChangedInTheAPITitle"
        >
          {getLocalizedString(
            "WhatHasChangedInTheAPI.WhatHasChangedInTheAPITitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "WhatHasChangedInTheAPI.WhatHasChangedInTheAPIParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "WhatHasChangedInTheAPI.WhatHasChangedInTheAPIParagraphTwo"
          )}
        </div>

        {/* New Namespaces */}
        <div className="ContentPageSection">
          {getLocalizedString("NewNamespaces.NewNamespacesTitle")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("NewNamespaces.NewNamespacesParagraphOne")}
        </div>
        <ul className="ContentPageParagraph">
          {getLocalizedStringArray("NewNamespaces.NewNamespacesList").map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>

        {/* New Components with Clearer Names */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "NewComponentsWithClearerNames.NewComponentsWithClearerNamesTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "NewComponentsWithClearerNames.NewComponentsWithClearerNamesParagraphOne"
          )}
        </div>
        <ul className="ContentPageParagraph">
          {getLocalizedStringArray(
            "NewComponentsWithClearerNames.NewComponentsWithClearerNamesList"
          ).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Renamed Components */}
        <div className="ContentPageSection">
          {getLocalizedString("RenamedComponents.RenamedComponentsTitle")}
        </div>
        <ul className="ContentPageParagraph">
          {getLocalizedStringArray(
            "RenamedComponents.RenamedComponentsList"
          ).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Renamed Fields */}
        <div className="ContentPageSection">
          {getLocalizedString("RenamedFields.RenamedFieldsTitle")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("RenamedFields.RenamedFieldsParagraphOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("RenamedFields.RenamedFieldsParagraphTwo")}
        </div>

        {/* Cleaner Object Structure, No Hidden GameObjects */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "CleanerObjectStructureNoHiddenGameObjects.CleanerObjectStructureNoHiddenGameObjectsTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "CleanerObjectStructureNoHiddenGameObjects.CleanerObjectStructureNoHiddenGameObjectsParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "CleanerObjectStructureNoHiddenGameObjects.CleanerObjectStructureNoHiddenGameObjectsParagraphTwo"
          )}
        </div>

        {/*  New Input Handling*/}
        <div className="ContentPageSection">
          {getLocalizedString("NewInputHandling.NewInputHandlingTitle")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("NewInputHandling.NewInputHandlingParagraphOne")}
        </div>

        {/* New Events Architecture */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "NewEventsArchitecture.NewEventsArchitectureTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "NewEventsArchitecture.NewEventsArchitectureParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "NewEventsArchitecture.NewEventsArchitectureParagraphTwo"
          )}
        </div>

        {/* New Spline Implementation */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "NewSplineImplementation.NewSplineImplementationTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "NewSplineImplementation.NewSplineImplementationParagraphOne"
          )}
        </div>

        {/* Decoupled from Unity Layers */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "DecoupledFromUnityLayers.DecoupledFromUnityLayersTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "DecoupledFromUnityLayers.DecoupledFromUnityLayersParagraphOne"
          )}
        </div>

        <Image src={require("../../assets/images/UpgradingFrom2x1.png")} />
        <br></br>
        <Image src={require("../../assets/images/UpgradingFrom2x2.png")} />

        {/* Lens Mode Override */}
        <div className="ContentPageSection">
          {getLocalizedString("LensModeOverride.LensModeOverrideTitle")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("LensModeOverride.LensModeOverrideParagraphOne")}
        </div>

        <Image src={require("../../assets/images/UpgradingFrom2x3.png")} />

        {/* Upgrading the Project Data */}
        <div
          className="ContentPageSubtitle"
          id="UpgradingTheProjectData.UpgradingTheProjectDataTitle"
        >
          {getLocalizedString(
            "UpgradingTheProjectData.UpgradingTheProjectDataTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingTheProjectData.UpgradingTheProjectDataParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingTheProjectData.UpgradingTheProjectDataParagraphTwo"
          )}
        </div>
        <Image src={require("../../assets/images/UpgradingFrom2x4.png")} />
        <br></br>
        <Image src={require("../../assets/images/UpgradingFrom2x5.png")} />

        {/* Upgrading a Single Object */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingASingleObject.UpgradingASingleObjectTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingASingleObject.UpgradingASingleObjectParagraphOne"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingASingleObject.UpgradingASingleObjectParagraphTwo"
          )}
        </div>

        {/* Upgrading a Single Scene */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingASingleScene.UpgradingASingleSceneTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingASingleScene.UpgradingASingleSceneParagraphOne"
          )}
        </div>

        {/* Upgrading the Whole Project */}
        <div className="ContentPageSection">
          {getLocalizedString(
            "UpgradingTheWholeProject.UpgradingTheWholeProjectTitle"
          )}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString(
            "UpgradingTheWholeProject.UpgradingTheWholeProjectParagraphOne"
          )}
        </div>

        <hr />
      </div>
      <div>
        <div className="MarginMedium">
          {getLocalizedString("Common.InThisArticle")}
        </div>
        <Anchor
          className="MarginMedium"
          items={getAnchorItems([
            "UpgradingYourProjectStepByStep.UpgradingYourProjectStepByStepTitle",
            "WhatHasChangedInTheAPI.WhatHasChangedInTheAPITitle",
            "UpgradingTheProjectData.UpgradingTheProjectDataTitle",
          ])}
        />
      </div>
    </div>
  );
};

export default UpgradeFrom2xPage;
