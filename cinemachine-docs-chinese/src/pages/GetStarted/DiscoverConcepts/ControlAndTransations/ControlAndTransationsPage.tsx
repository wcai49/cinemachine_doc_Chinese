/**
 * ControlAndTransationsPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-04
 * Description: Control and transactions page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../../utils/getLocalizedString.ts";
import { Anchor, Image, Table } from "antd";
import { getAnchorItems } from "../../../../utils/AnchorUtils.ts";
import { useLocation } from "react-router-dom";

const ControlAndTransationsPage: React.FC = () => {
  const location = useLocation();
  const states = getLocalizedStringArray("ControlAndTransations.states");
  const descriptions = getLocalizedStringArray(
    "ControlAndTransations.descriptions"
  );

  const dataSources = states.map((state, index) => {
    return {
      key: index.toString(),
      state: state,
      description: descriptions[index],
    };
  });

  const columns = [
    {
      title: getLocalizedString("Common.State"),
      dataIndex: "state",
      key: "state",
    },
    {
      title: getLocalizedString("Common.Description"),
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <div className="FlexRow">
      <div className="FlexOne">
        <div className="ContentPageTitle">
          {getLocalizedString("ControlAndTransations.title")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphOne")}
        </div>

        {/* Cinemachine Camera States */}
        <div
          id={`${location.pathname}#ControlAndTransations.subtitleOne`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ControlAndTransations.subtitleOne")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphTwo")}
        </div>
        <Table
          dataSource={dataSources}
          columns={columns}
          pagination={false}
          bordered={true}
        />

        {/* Choose Active Cinemachine Camera */}
        <div
          id={`${location.pathname}#ControlAndTransations.subtitleTwo`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ControlAndTransations.subtitleTwo")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphThree")}
        </div>
        <ul>
          {getLocalizedStringArray("ControlAndTransations.listOne").map(
            (item, index) => {
              return (
                <li key={index}>
                  <div className="ContentPageParagraph">{item}</div>
                </li>
              );
            }
          )}
        </ul>

        {/* Real-time Dynamic Events */}
        <div className="ContentPageSubtitle">
          {getLocalizedString("ControlAndTransations.subtitleThree")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphFour")}
        </div>

        {/* Timeline */}
        <div className="ContentPageSubtitle">
          {getLocalizedString("ControlAndTransations.subtitleFour")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphSix")}
        </div>

        {/* Cinemachine Camera Transitions */}
        <div
          id={`${location.pathname}#ControlAndTransations.subtitleFive`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ControlAndTransations.subtitleFive")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphSeven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphEight")}
        </div>
        <ul>
          {getLocalizedStringArray("ControlAndTransations.listTwo").map(
            (item, index) => {
              return (
                <li key={index}>
                  <div className="ContentPageParagraph">{item}</div>
                </li>
              );
            }
          )}
        </ul>

        {/* Blends */}
        <div className="ContentPageSubtitle">
          {getLocalizedString("ControlAndTransations.subtitleSix")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphNine")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphTen")}
        </div>

        <Image
          src={require("../../../../assets/images/control-transition-image1.png")}
        />

        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphEleven")}
        </div>

        {/* Switching */}
        <div className="ContentPageSubtitle">
          {getLocalizedString("ControlAndTransations.subtitleSeven")}
        </div>
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphTwelve")}
        </div>
        <Image
          src={require("../../../../assets/images/control-transition-image2.png")}
        />
        <div className="ContentPageParagraph">
          {getLocalizedString("ControlAndTransations.paragraphThirteen")}
        </div>

        {/* Additional Resources */}
        <div
          id={`${location.pathname}#ControlAndTransations.subtitleEight`}
          className="ContentPageSubtitle"
        >
          {getLocalizedString("ControlAndTransations.subtitleEight")}
        </div>
        <div className="ContentPageParagraph">
          <ul>
            <a href="#section3-3-Set-up-multiple-Cinemachine-Cameras-and-transitions">
              {getLocalizedString("ControlAndTransations.paragraphFourteen")}
            </a>
          </ul>
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
              "ControlAndTransations.subtitleOne",
              "ControlAndTransations.subtitleTwo",
              "ControlAndTransations.subtitleFive",
              "ControlAndTransations.subtitleEight",
            ],
            location.pathname
          )}
        />
      </div>
    </div>
  );
};

export default ControlAndTransationsPage;
