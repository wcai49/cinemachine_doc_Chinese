/**
 * DiscoverConceptsPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-05-31
 * Description: DiscoverConceptsPage under GetStarted page
 */

import React from "react";
import { Table } from "antd";

import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../utils/getLocalizedString.ts";

const keys = [
  "section3-1-1-Cinemachine-essential-elements",
  "section3-1-2-Camera-control-and-transitions",
  "section3-1-3-Procedural-motion",
  "section3-1-4-Cinemachine-and-Timeline",
];

const DiscoverConceptsPage: React.FC = () => {
  const sections = getLocalizedStringArray("DiscoverConcepts.sections");
  const descriptions = getLocalizedStringArray("DiscoverConcepts.descriptions");

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
      render: (text, record, index) => <a href={"#/" + keys[index]}>{text}</a>,
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
        {getLocalizedString("DiscoverConcepts.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("DiscoverConcepts.paragraphOne")}
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={true}
      />
    </div>
  );
};

export default DiscoverConceptsPage;
