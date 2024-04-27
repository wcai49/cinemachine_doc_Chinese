/**
 * NavigationUtils.ts
 * Author: Wenlei Cai
 * Date: 2024-04-27
 * Description: NavigationMenu component for the application
 */

import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
