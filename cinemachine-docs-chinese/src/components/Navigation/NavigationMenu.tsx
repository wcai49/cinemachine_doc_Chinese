/**
 * NavigationMenu.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-24
 * Description: NavigationMenu component for the application
 */

import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { getItem } from "./NavigationUtils.ts";
import { PlusOutlined } from "@ant-design/icons";
import menuItems from "../../assets/localizedLanguages/MenuItems_zh.json";

interface NavigationMenuProps {
  navigateClick: (route: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ navigateClick }) => {
  const [selectedKey, setSelectedKey] = useState(
    "section1-Cinemachine-package"
  );

  const generateMenuItems = (items: any[]): MenuProps["items"] => {
    return items.map((item) => {
      if (!item) {
        return null;
      }
      let subItems;
      if (item.subItems) {
        subItems = generateMenuItems(item.subItems);
      }
      const menuItem = getItem(
        item.label,
        item.key,
        item.subItems ? <PlusOutlined /> : undefined,
        subItems
      );

      return menuItem;
    });
  };
  const fetchedMenuItems: MenuProps["items"] = generateMenuItems(menuItems);

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKey(e.key);
    navigateClick(e.keyPath.toString());
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      mode="inline"
      items={fetchedMenuItems}
      expandIcon={null}
      selectedKeys={[selectedKey]}
      defaultSelectedKeys={["section1-Cinemachine-package"]}
    />
  );
};

export default NavigationMenu;
