/**
 * UseToolsAndShortcutsPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-17
 * Description: Use Tools and Shortcuts Page
 */

import React from "react";
import { Table } from "antd";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../utils/getLocalizedString.ts";

const featureKeys = [
  "section3-6-1-Pre-built-cameras",
  "section3-6-2-Scene-Handles",
  "section3-6-3-Saving-in-Play-Mode",
];

const UseToolsAndShortcutsPage: React.FC = () => {
  const features = getLocalizedStringArray("UseToolsAndShortcuts.features");
  const descriptions = getLocalizedStringArray(
    "UseToolsAndShortcuts.descriptions"
  );

  const dataSource = features.map((feature, index) => ({
    key: index.toString(),
    feature: feature,
    description: descriptions[index],
  }));

  const columns = [
    {
      title: getLocalizedString("Common.Feature"),
      dataIndex: "feature",
      key: "feature",
      render: (text, record, index) => (
        <a href={"#/" + featureKeys[index]}>{text}</a>
      ),
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
        {getLocalizedString("UseToolsAndShortcuts.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("UseToolsAndShortcuts.paragraphOne")}
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

export default UseToolsAndShortcutsPage;
