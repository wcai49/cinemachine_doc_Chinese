/**
 * AnchorUtils.ts
 * Author: Wenlei Cai
 * Date: 2024-04-30
 * Description: Util for the application to return anchor links according to the current language
 */

import { getLocalizedString } from "./getLocalizedString.ts";

export function getAnchorItems(items: string[]) {
  let anchorItems: { key; href; title; children? }[] = [];

  items.forEach((item) => {
    anchorItems.push({
      key: item,
      title: getLocalizedString(item),
      href: `#${item}`,
    });
  });

  return anchorItems;
}
