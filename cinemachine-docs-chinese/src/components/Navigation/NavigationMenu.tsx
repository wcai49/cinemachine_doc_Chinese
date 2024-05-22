/**
 * NavigationMenu.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-24
 * Description: NavigationMenu component for the application
 */

import React, { useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";
import { getItem } from "./NavigationUtils.ts";
import { PlusOutlined } from "@ant-design/icons";
import menuItems from "../../assets/localizedLanguages/MenuItems/MenuItems_zh.json";

interface NavigationMenuProps {
  navigateClick: (route: string) => void;
  currentPath: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  navigateClick,
  currentPath,
}) => {
  const [selectedKey, setSelectedKey] = useState(
    "section1-Cinemachine-package"
  );

  useEffect(() => {
    setSelectedKey(currentPath);
  }, [currentPath, selectedKey]);

  const onClick = (e) => {
    const path = e.key ? e.key.toString() : e;
    setSelectedKey(path);
    navigateClick(path);
  };

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
        <div onClick={() => onClick(item.key)}>{item.label}</div>,
        item.key,
        item.subItems ? <PlusOutlined /> : undefined,
        subItems,
        item.type
      );

      return menuItem;
    });
  };
  const fetchedMenuItems: MenuProps["items"] = generateMenuItems(menuItems);

  return (
    <Menu
      style={{ width: 256 }}
      mode="inline"
      items={fetchedMenuItems}
      expandIcon={null}
      selectedKeys={[selectedKey]}
      defaultSelectedKeys={["section1-Cinemachine-package"]}
      onSelect={onClick}
    ></Menu>
  );
};

export default NavigationMenu;
