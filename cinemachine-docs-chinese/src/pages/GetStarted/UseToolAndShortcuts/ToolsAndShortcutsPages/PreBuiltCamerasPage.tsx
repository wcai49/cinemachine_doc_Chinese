/**
 * PreBuiltCamerasPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-17
 * Description: Pre-built Cinemachine Cameras Page
 */

import React from "react";
import { Table } from "antd";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../../utils/getLocalizedString.ts";
import Note from "../../../../components/Note.tsx";

const PreBuiltCamerasPage: React.FC = () => {
  const menuItems = getLocalizedStringArray("PreBuiltCameras.menuItems");
  const descriptions = getLocalizedStringArray("PreBuiltCameras.descriptions");

  const dataSource = menuItems.map((item, index) => ({
    key: index.toString(),
    menuItem: item,
    description: descriptions[index],
  }));

  const columns = [
    {
      title: getLocalizedString("Common.Feature"),
      dataIndex: "menuItem",
      key: "menuItem",
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
        {getLocalizedString("PreBuiltCameras.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("PreBuiltCameras.paragraphOne")}
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={true}
      />
      <Note notes={[getLocalizedString("PreBuiltCameras.note")]} />
    </div>
  );
};

export default PreBuiltCamerasPage;
