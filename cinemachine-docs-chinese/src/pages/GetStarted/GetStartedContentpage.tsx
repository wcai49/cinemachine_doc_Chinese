/**
 * GetStartedContentPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-30
 * Description: GetStarted page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../utils/getLocalizedString.ts";
import { Table } from "antd";

const keys = [
  "section3-1-Discover-Cinemachine-concepts",
  "section3-2-Set-up-a-basic-Cinemachine-environment",
  "section3-3-Set-up-multiple-Cinemachine-Cameras-and-transitions",
  "section3-4-Add-procedural-behavior-to-a-Cinemachine-Camera",
  "section3-5-Set-up-Timeline-with-Cinemachine-Cameras",
  "section3-6-Use-convenient-tools-and-shortcuts",
];
const GetStartedContentPage: React.FC = () => {
  const sections = getLocalizedStringArray("GetStarted.sections");
  const descriptions = getLocalizedStringArray("GetStarted.descriptions");

  const dataSource = sections.map((section, index) => {
    return {
      key: index.toString(),
      section: section,
      description: descriptions[index],
    };
  });

  const columns = [
    {
      title: getLocalizedString("Common.Section"),
      dataIndex: "section",
      key: "section",
      render: (text, record, index) => <a href={keys[index]}>{text}</a>,
    },
    {
      title: getLocalizedString("Common.Description"),
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("GetStarted.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("GetStarted.paragraphOne")}
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={true}
      ></Table>
    </div>
  );
};

export default GetStartedContentPage;
